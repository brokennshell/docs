"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { Domain } from "@/types";

interface DomainHeaderProps {
    domain: Domain;
}

export default function DomainHeader({ domain }: DomainHeaderProps) {
    const headerRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headerRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            iconRef.current,
            { opacity: 0, scale: 0.8, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6 }
        )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.4"
            )
            .fromTo(
                descRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.3"
            )
            .fromTo(
                statsRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4 },
                "-=0.2"
            );
    }, []);

    return (
        <div
            ref={headerRef}
            className="relative pt-24 pb-12 mb-8 border-b border-border-secondary overflow-hidden"
        >
            {/* Background ambient glow based on domain color */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none"
                style={{ backgroundColor: domain.color }}
            />

            <div className="container-narrow relative z-10 text-center flex flex-col items-center">
                <div
                    ref={iconRef}
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 opacity-0"
                    style={{
                        backgroundColor: `color-mix(in srgb, ${domain.tagColor} 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${domain.tagColor} 30%, transparent)`,
                    }}
                >
                    {domain.icon}
                </div>

                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4 opacity-0"
                >
                    {domain.title}
                </h1>

                <p
                    ref={descRef}
                    className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed opacity-0"
                >
                    {domain.description}
                </p>

                <div ref={statsRef} className="flex items-center gap-6 opacity-0">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-semibold text-text-primary">
                            {domain.roadmapCount}
                        </span>
                        <span className="text-xs text-text-tertiary uppercase tracking-wider">
                            Roadmaps
                        </span>
                    </div>
                    <div className="w-px h-8 bg-border-secondary" />
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-semibold text-text-primary">
                            {domain.noteCount}
                        </span>
                        <span className="text-xs text-text-tertiary uppercase tracking-wider">
                            Notes
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
