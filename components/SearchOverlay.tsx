"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { domains } from "@/lib/data/domains";
import { roadmaps } from "@/lib/data/roadmaps";
import { notesMeta } from "@/lib/data/notes";
import type { SearchResult } from "@/types";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({
    isOpen,
    onClose,
}: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const overlayRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Generate searchable index (static computation)
    const searchIndex = useMemo(() => {
        const index: SearchResult[] = [];

        // Add domains
        domains.forEach((d) => {
            index.push({
                type: "domain",
                title: d.title,
                description: d.description,
                slug: d.slug,
                domainSlug: d.slug,
                domainTitle: d.title,
            });
        });

        // Add roadmaps
        Object.values(roadmaps).forEach((r) => {
            const parentDomain = domains.find((d) => d.slug === r.domainSlug)!;
            index.push({
                type: "roadmap",
                title: r.title,
                description: r.description,
                slug: "", // Roadmaps are on the domain hub page
                domainSlug: r.domainSlug,
                domainTitle: parentDomain.title,
            });
        });

        // Add notes
        Object.values(notesMeta).flat().forEach((n) => {
            const parentDomain = domains.find((d) => d.slug === n.domainSlug);
            if (parentDomain) {
                index.push({
                    type: "note",
                    title: n.title,
                    description: n.description,
                    slug: n.slug,
                    domainSlug: n.domainSlug,
                    domainTitle: parentDomain.title,
                });
            }
        });

        return index;
    }, []);

    // Perform search
    const results = useMemo(() => {
        if (!query.trim()) {
            return [];
        }

        const q = query.toLowerCase();

        // Fuzzy matching logic: simple text inclusion
        // Can be upgraded to better distance algorithms if needed
        const matched = searchIndex.filter(
            (item) =>
                (activeFilter === "all" || item.domainSlug === activeFilter) &&
                (item.title.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.domainTitle.toLowerCase().includes(q))
        );

        return matched.slice(0, 8); // Top 8 results
    }, [query, searchIndex, activeFilter]);

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Entrance/Exit Animation
    useEffect(() => {
        if (isOpen) {
            if (overlayRef.current) overlayRef.current.style.display = "flex";

            gsap.to(overlayRef.current, {
                opacity: 1,
                backdropFilter: "blur(8px)",
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.fromTo(
                containerRef.current,
                { scale: 0.95, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );

            // Focus input when modal opens
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            gsap.to(containerRef.current, {
                scale: 0.95,
                opacity: 0,
                y: 10,
                duration: 0.2,
                ease: "power2.in",
            });

            gsap.to(overlayRef.current, {
                opacity: 0,
                backdropFilter: "blur(0px)",
                duration: 0.2,
                ease: "power2.in",
                onComplete: () => {
                    if (overlayRef.current) overlayRef.current.style.display = "none";
                    setQuery("");
                },
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-100 hidden items-start justify-center pt-[15vh] px-4 opacity-0 bg-bg-primary/80"
            onClick={(e) => {
                if (e.target === overlayRef.current) onClose();
            }}
        >
            <div
                ref={containerRef}
                className="w-full max-w-2xl bg-bg-secondary border border-border-primary rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-border-secondary">
                    <svg className="text-text-tertiary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex-1 bg-transparent text-text-primary text-lg outline-none placeholder:text-text-tertiary"
                        placeholder="Search docs..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={onClose}
                        className="text-[10px] font-mono font-medium tracking-wider uppercase px-2 py-1 rounded bg-bg-tertiary text-text-tertiary border border-border-secondary hover:text-text-primary"
                    >
                        ESC
                    </button>
                </div>

                {/* Filters */}
                <div className="px-4 py-3 bg-bg-tertiary/30 border-b border-border-secondary flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActiveFilter("all")}
                        className={`whitespace-nowrap px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border transition-colors ${activeFilter === "all"
                            ? "bg-text-primary text-bg-primary border-transparent"
                            : "bg-transparent text-text-tertiary border-border-secondary hover:text-text-secondary hover:border-border-primary"
                            }`}
                    >
                        All
                    </button>
                    {domains.map((d) => (
                        <button
                            key={d.id}
                            onClick={() => setActiveFilter(d.slug)}
                            className={`whitespace-nowrap px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border transition-colors ${activeFilter === d.slug
                                ? "border-transparent text-bg-primary"
                                : "bg-transparent text-text-tertiary hover:border-border-primary"
                                }`}
                            style={{
                                backgroundColor: activeFilter === d.slug ? d.color : "transparent",
                                borderColor: activeFilter !== d.slug ? "var(--border-secondary)" : undefined,
                            }}
                        >
                            {d.title}
                        </button>
                    ))}
                </div>

                {/* Results Area */}
                <div className="max-h-[50vh] overflow-y-auto pt-2 pb-4">
                    {!query ? (
                        <div className="px-8 py-12 text-center text-text-tertiary text-sm">
                            <p>Type to start searching everything...</p>
                        </div>
                    ) : results.length > 0 ? (
                        <ul className="px-2 space-y-1">
                            {results.map((result, i) => (
                                <li key={`${result.domainSlug}-${result.slug}-${i}`}>
                                    <Link
                                        href={`/${result.domainSlug}${result.type === "note" ? `/notes/${result.slug}` : ""}`}
                                        onClick={onClose}
                                        className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-3 rounded-xl hover:bg-bg-tertiary transition-colors group"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors truncate">
                                                    {result.title}
                                                </span>
                                                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-bg-primary border border-border-secondary text-text-tertiary shrink-0">
                                                    {result.type}
                                                </span>
                                            </div>
                                            <p className="text-xs text-text-secondary truncate">
                                                {result.description}
                                            </p>
                                        </div>

                                        <div className="shrink-0 flex items-center justify-start md:justify-end">
                                            <span className="text-xs font-medium text-text-tertiary flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: domains.find(d => d.slug === result.domainSlug)?.color }} />
                                                {result.domainTitle}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="px-8 py-12 text-center text-text-tertiary text-sm">
                            <p>No results found for &quot;{query}&quot;</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
