"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageTransition({
    children,
    className = "",
}: PageTransitionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 12 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
                delay: 0.1,
            }
        );
    }, []);

    return (
        <div ref={containerRef} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
}
