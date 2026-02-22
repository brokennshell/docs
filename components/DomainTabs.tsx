"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import type { Roadmap, NoteSidebarItem } from "@/types";

interface DomainTabsProps {
    roadmap?: Roadmap;
    notes: NoteSidebarItem[];
}

export default function DomainTabs({ roadmap, notes }: DomainTabsProps) {
    const [activeTab, setActiveTab] = useState<"roadmaps" | "notes">("roadmaps");
    const indicatorRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Animate the active tab indicator
    useEffect(() => {
        if (!indicatorRef.current) return;

        gsap.to(indicatorRef.current, {
            x: activeTab === "roadmaps" ? 0 : "100%",
            duration: 0.3,
            ease: "power2.out",
        });
    }, [activeTab]);

    // Handle content fade out/in when switching tabs
    const handleTabChange = (tab: "roadmaps" | "notes") => {
        if (tab === activeTab) return;

        if (containerRef.current) {
            gsap.to(containerRef.current, {
                opacity: 0,
                y: 10,
                duration: 0.2,
                onComplete: () => {
                    setActiveTab(tab);
                    gsap.to(containerRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                },
            });
        } else {
            setActiveTab(tab);
        }
    };

    return (
        <div className="container-docs pb-24">
            <div className="flex justify-center mb-12">
                <div className="relative inline-flex p-1 bg-bg-secondary rounded-xl border border-border-secondary">
                    {/* Animated background indicator */}
                    <div
                        ref={indicatorRef}
                        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-bg-tertiary border border-border-primary rounded-lg shadow-sm"
                    />

                    <button
                        onClick={() => handleTabChange("roadmaps")}
                        className={`relative z-10 px-8 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${activeTab === "roadmaps" ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary"
                            }`}
                    >
                        Roadmaps
                    </button>

                    <button
                        onClick={() => handleTabChange("notes")}
                        className={`relative z-10 px-8 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${activeTab === "notes" ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary"
                            }`}
                    >
                        Notes
                    </button>
                </div>
            </div>

            <div ref={containerRef} className="min-h-[400px]">
                {activeTab === "roadmaps" ? (
                    <div className="text-center text-text-tertiary">
                        {roadmap ? (
                            <p>Roadmap component will render here</p>
                        ) : (
                            <p className="mt-12 text-center text-text-tertiary">No roadmaps available.</p>
                        )}
                    </div>
                ) : (
                    <div className="text-center text-text-tertiary">
                        {notes.length > 0 ? (
                            <p>Notes component will render here</p>
                        ) : (
                            <p className="mt-12 text-center text-text-tertiary">No notes available.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
