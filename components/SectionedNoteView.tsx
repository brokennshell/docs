"use client";

import ModuleSidebar from "@/components/ModuleSidebar";
import { useEffect, useRef, useState } from "react";

interface SectionedNoteViewProps {
    sections: { id: string, title: string, element: React.ReactNode }[];
    modules?: unknown;
}

export default function SectionedNoteView({ sections }: SectionedNoteViewProps) {
    const [activePartId, setActivePartId] = useState(sections[0]?.id ?? "");
    const isProgrammaticScroll = useRef(false);
    const effectiveActivePartId =
        sections.some((section) => section.id === activePartId) ? activePartId : sections[0]?.id ?? "";

    useEffect(() => {
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isProgrammaticScroll.current) return;

                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible?.target?.id) {
                    setActivePartId(visible.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-25% 0px -60% 0px",
                threshold: [0.1, 0.3, 0.6],
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    if (sections.length === 0) return null;

    const handleSelectPart = (id: string) => {
        setActivePartId(id);

        const target = document.getElementById(id);
        if (!target) return;

        isProgrammaticScroll.current = true;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => {
            isProgrammaticScroll.current = false;
        }, 550);
    };

    return (
        <div className="flex flex-col w-full">
            <ModuleSidebar
                items={sections.map((section) => ({ id: section.id, title: section.title }))}
                activePartId={effectiveActivePartId}
                onSelectPart={handleSelectPart}
            />

            <div className="mt-10">
                <article className="space-y-16">
                    {sections.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="scroll-mt-36 border border-border-primary/25 rounded-2xl bg-bg-secondary/20 p-6 sm:p-8"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-accent-primary mb-8">
                                {section.title}
                            </h2>
                            <div className="prose-docs prose-sectioned">
                                {section.element}
                            </div>
                        </section>
                    ))}
                    <div className="mt-12 pt-8 border-t border-border-primary/20" />
                </article>
            </div>

            <style jsx>{`
                .prose-sectioned :global(h2) {
                    margin-top: 2rem;
                }
                .prose-sectioned :global(h3) {
                    margin-top: 1.5rem;
                }
                .prose-sectioned :global(pre) {
                    margin-top: 1rem;
                    margin-bottom: 1.5rem;
                }
                .prose-sectioned :global(blockquote) {
                    background: rgba(var(--accent-rgb), 0.06);
                    border-left: 3px solid rgba(var(--accent-rgb), 0.5);
                    border-radius: 0.75rem;
                    padding: 0.75rem 1rem;
                }
            `}</style>
        </div>
    );
}
