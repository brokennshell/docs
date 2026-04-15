"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

interface PartTabItem {
    id: string;
    title: string;
}

interface ModuleSidebarProps {
    items: PartTabItem[];
    activePartId: string;
    onSelectPart: (id: string) => void;
}

export default function ModuleSidebar({ items, activePartId, onSelectPart }: ModuleSidebarProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const moduleIndicatorRef = useRef<HTMLDivElement>(null);
    const activeIndex = Math.max(0, items.findIndex((item) => item.id === activePartId));

    useGSAP(() => {
        if (!containerRef.current || !moduleIndicatorRef.current) return;

        // Animate module indicator (the underline/pill for the active module)
        const activeModuleBtn = containerRef.current.querySelector(`.module-btn-${activeIndex}`) as HTMLElement;
        if (activeModuleBtn) {
            gsap.to(moduleIndicatorRef.current, {
                x: activeModuleBtn.offsetLeft,
                width: activeModuleBtn.offsetWidth,
                duration: 0.6,
                ease: "expo.out"
            });
        }

        // Entrance animation
        gsap.fromTo(
            containerRef.current.querySelectorAll(".anim-in"),
            { opacity: 0, y: 5 },
            { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" }
        );
    }, { dependencies: [activeIndex], scope: containerRef });

    if (items.length === 0) return null;

    return (
        <div ref={containerRef} className="w-full bg-bg-primary/40 backdrop-blur-xl border-y border-border-primary/30 sticky top-16 z-30 transition-all duration-300">
            <div className="relative flex items-center gap-1 py-0 border-b border-border-primary/10 overflow-x-auto no-scrollbar">
                <div
                    ref={moduleIndicatorRef}
                    className="absolute bottom-0 h-0.5 bg-accent-primary shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)] z-10"
                />

                {items.map((item, idx) => (
                    <button
                        key={item.id}
                        onClick={() => onSelectPart(item.id)}
                        className={`module-btn-${idx} anim-in relative px-5 ${idx === 0 ? "pl-0" : ""} py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${activePartId === item.id ? "text-accent-primary" : "text-text-tertiary hover:text-text-secondary"
                            }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
