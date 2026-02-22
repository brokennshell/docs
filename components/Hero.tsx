"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SearchBar from "@/components/SearchBar";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);
    const decorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7 },
                "-=0.5"
            )
            .fromTo(
                searchRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.4"
            )
            .fromTo(
                decorRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1 },
                "-=0.6"
            );
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        >
            <div ref={decorRef} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/[0.03] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.03] rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg-primary)_70%)]" />
            </div>

            <div className="relative container-docs text-center">
                
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 opacity-0"
                >
                    Learn. Build.
                    <br />
                    <span className="gradient-text">Ship Code.</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
                >
                    Curated roadmaps and developer notes across Full Stack, AI/ML, DevOps,
                    and more. Structured learning paths for modern software engineering.
                </p>

                <div ref={searchRef} className="max-w-xl mx-auto mb-12 opacity-0">
                    <SearchBar />
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-text-tertiary">
                    <div className="flex items-center gap-2">
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
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        6 Domains
                    </div>
                    <div className="flex items-center gap-2">
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
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Structured Paths
                    </div>
                    <div className="flex items-center gap-2">
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
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        Open Source
                    </div>
                </div>
            </div>
        </section>
    );
}
