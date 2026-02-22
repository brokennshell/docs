"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";

export default function SearchBar() {
    const [focused, setFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const openSearch = () => {
        window.dispatchEvent(new Event("open-search"));
    };

    const handleFocus = () => {
        setFocused(true);
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleBlur = () => {
        setFocused(false);
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors duration-200 ${focused
                ? "bg-bg-secondary border-border-accent"
                : "bg-bg-input border-border-secondary hover:border-border-primary"
                }`}
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-tertiary shrink-0"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <button
                type="button"
                onClick={openSearch}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="flex-1 bg-transparent text-left text-sm text-text-tertiary outline-none"
                aria-label="Search documentation"
            >
                Search roadmaps, notes, topics...
            </button>
        </div>
    );
}
