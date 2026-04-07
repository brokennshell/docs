"use client";

import type { ModuleInfo } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

interface ModuleSidebarProps {
    modules: ModuleInfo[];
}

export default function ModuleSidebar({ modules }: ModuleSidebarProps) {
    const [activeModuleId, setActiveModuleId] = useState<string>(modules[0]?.id ?? "");
    const observerRef = useRef<IntersectionObserver | null>(null);
    const moduleVisibility = useRef<Map<string, number>>(new Map());

    const updateActiveModule = useCallback(() => {
        let maxRatio = 0;
        let activeId = "";

        moduleVisibility.current.forEach((ratio, id) => {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                activeId = id;
            }
        });

        if (activeId && maxRatio > 0) {
            setActiveModuleId(activeId);
        }
    }, []);

    useEffect(() => {
        // Inject IDs into module-container elements
        const moduleContainers = document.querySelectorAll(".module-container");
        moduleContainers.forEach((container, index) => {
            const moduleId = `module-${index}`;
            container.id = moduleId;

            // Inject IDs into sub-dropdown details within this container
            const subDropdowns = container.querySelectorAll(".sub-dropdown");
            subDropdowns.forEach((dropdown, partIndex) => {
                dropdown.id = `${moduleId}-part-${partIndex}`;
            });
        });

        // Set up IntersectionObserver for module containers
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    moduleVisibility.current.set(
                        entry.target.id,
                        entry.intersectionRatio
                    );
                });
                updateActiveModule();
            },
            {
                rootMargin: "-10% 0px -10% 0px",
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            }
        );

        moduleContainers.forEach((container) => {
            observerRef.current?.observe(container);
        });

        return () => {
            observerRef.current?.disconnect();
        };
    }, [modules, updateActiveModule]);

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (modules.length === 0) return null;

    return (
        <aside className="hidden xl:block w-64 shrink-0 py-8 pl-8">
            <div className="sticky top-28">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-4">
                    Modules
                </h4>
                <nav className="space-y-1">
                    {modules.map((mod) => {
                        const isActive = activeModuleId === mod.id;

                        return (
                            <div key={mod.id}>
                                <button
                                    onClick={() => scrollToElement(mod.id)}
                                    className={`w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors ${isActive
                                            ? "text-accent-primary font-medium bg-accent-primary/5"
                                            : "text-text-tertiary hover:text-text-secondary"
                                        }`}
                                >
                                    {mod.title}
                                </button>

                                {isActive && mod.parts.length > 0 && (
                                    <ul className="ml-3 mt-1 mb-2 space-y-0.5 border-l border-border-secondary pl-3">
                                        {mod.parts.map((part) => (
                                            <li key={part.id}>
                                                <button
                                                    onClick={() => scrollToElement(part.id)}
                                                    className="w-full text-left text-xs text-text-tertiary hover:text-text-secondary py-1 transition-colors"
                                                >
                                                    {part.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
