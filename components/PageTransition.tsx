"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageTransition({
    children,
    className = "",
}: PageTransitionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
}
