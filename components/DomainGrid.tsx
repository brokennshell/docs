"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DomainCard from "@/components/DomainCard";
import type { Domain } from "@/types";

interface DomainGridProps {
    domains: Domain[];
}

export default function DomainGrid({ domains }: DomainGridProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headingRef.current) return;

        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="domains" className="py-24">
            <div className="container-docs">
                <div ref={headingRef} className="mb-12 opacity-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                        Explore Domains
                    </h2>
                    <p className="text-text-secondary max-w-lg">
                        Choose a learning path and start building. Each domain includes
                        structured roadmaps and in-depth notes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {domains.map((domain, index) => (
                        <DomainCard key={domain.id} domain={domain} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
