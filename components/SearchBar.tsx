"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleFocus = () => {
        setFocused(true);
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleBlur = () => {
        setFocused(false);
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors duration-200 ${focused
                    ? "bg-bg-secondary border-border-accent"
                    : "bg-bg-input border-border-secondary hover:border-border-primary"
                }`}
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-tertiary shrink-0"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Search roadmaps, notes, topics..."
                className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-tertiary outline-none"
                aria-label="Search documentation"
            />

            {!query && (
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] text-text-tertiary bg-bg-tertiary border border-border-secondary rounded-md font-mono">
                    <span className="text-xs">⌘</span>K
                </kbd>
            )}

            {query && (
                <button
                    onClick={() => setQuery("")}
                    className="text-text-tertiary hover:text-text-secondary transition-colors"
                    aria-label="Clear search"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            )}
        </div>
    );
}
