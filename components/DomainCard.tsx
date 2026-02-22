"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Domain } from "@/types";

interface DomainCardProps {
    domain: Domain;
    index: number;
}

export default function DomainCard({ domain, index }: DomainCardProps) {
    const cardRef = useRef<HTMLAnchorElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power3.out",
            }
        );
    }, { scope: cardRef, dependencies: [index] });

    return (
        <Link
            ref={cardRef}
            href={`/${domain.slug}`}
            className="card group p-6 flex flex-col gap-4 opacity-0"
        >
            <div className="flex items-start justify-between">
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{
                        backgroundColor: `color-mix(in srgb, ${domain.tagColor} 12%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${domain.tagColor} 20%, transparent)`,
                    }}
                >
                    {domain.icon}
                </div>
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-tertiary group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            </div>

            <div>
                <h3 className="text-base font-semibold text-text-primary mb-1.5 group-hover:text-accent-tertiary transition-colors">
                    {domain.title}
                </h3>
                <p className="text-sm text-text-tertiary leading-relaxed line-clamp-2">
                    {domain.description}
                </p>
            </div>

            <div className="flex items-center gap-3 mt-auto pt-2">
                <span className="text-xs text-text-tertiary">
                    {domain.roadmapCount} roadmap{domain.roadmapCount !== 1 ? "s" : ""}
                </span>
                <span className="w-1 h-1 rounded-full bg-border-primary" />
                <span className="text-xs text-text-tertiary">
                    {domain.noteCount} note{domain.noteCount !== 1 ? "s" : ""}
                </span>
            </div>
        </Link>
    );
}
