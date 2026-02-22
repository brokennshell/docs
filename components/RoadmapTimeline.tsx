"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Roadmap } from "@/types";

gsap.registerPlugin(ScrollTrigger);

interface RoadmapTimelineProps {
    roadmap: Roadmap;
}

export default function RoadmapTimeline({ roadmap }: RoadmapTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !lineRef.current) return;

        const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");

        // Animate the center line drawing down
        gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                transformOrigin: "top center",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );

        // Animate each node fading in as it scrolls into view
        nodes.forEach((node, i) => {
            const isEven = i % 2 === 0;
            gsap.fromTo(
                node,
                { opacity: 0, x: isEven ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: node,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, { scope: containerRef });

    if (!roadmap || !roadmap.steps?.length) {
        return <p className="text-center text-text-tertiary">No roadmap steps found.</p>;
    }

    return (
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-12">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-secondary -translate-x-1/2">
                <div ref={lineRef} className="absolute top-0 w-full h-full bg-accent-primary" />
            </div>

            <ol className="flex flex-col gap-12 list-none p-0 m-0 relative z-10">
                {roadmap.steps.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <li
                            key={step.id}
                            className={`timeline-node relative flex items-start md:items-center w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-primary -translate-x-1/2 mt-2 md:mt-0 z-10" />

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block w-1/2 px-8" />

                            {/* Content Card */}
                            <div className="w-full md:w-1/2 pl-12 pr-4 md:px-8">
                                <div className="card p-6 text-left">
                                    <div className="flex items-center justify-between mb-3">
                                        <span
                                            className={`text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded-md ${step.status === "beginner"
                                                ? "text-emerald-400 bg-emerald-400/10"
                                                : step.status === "intermediate"
                                                    ? "text-amber-400 bg-amber-400/10"
                                                    : "text-rose-400 bg-rose-400/10"
                                                }`}
                                        >
                                            {step.status}
                                        </span>
                                        <span className="text-2xl font-bold text-border-primary">
                                            {(index + 1).toString().padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-text-primary mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {step.topics.map((topic) => (
                                            <span
                                                key={topic}
                                                className="text-xs px-2 py-1 rounded-full bg-bg-tertiary text-text-tertiary border border-border-secondary"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>

                                    {step.resources.length > 0 && (
                                        <div className="border-t border-border-secondary pt-4">
                                            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                                                Resources
                                            </h4>
                                            <ul className="space-y-2">
                                                {step.resources.map((res, i) => (
                                                    <li key={i}>
                                                        <a
                                                            href={res.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-text-link hover:text-accent-tertiary transition-colors flex items-center gap-2 group"
                                                        >
                                                            <span className="text-lg opacity-80 group-hover:opacity-100">
                                                                {res.type === "video"
                                                                    ? "🎥"
                                                                    : res.type === "course"
                                                                        ? "🎓"
                                                                        : res.type === "article"
                                                                            ? "📝"
                                                                            : "📚"}
                                                            </span>
                                                            {res.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
