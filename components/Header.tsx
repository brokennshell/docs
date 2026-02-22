"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import SearchOverlay from "@/components/SearchOverlay";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Global search shortcut & event listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        const handleOpenSearch = () => setSearchOpen(true);

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("open-search", handleOpenSearch as EventListener);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("open-search", handleOpenSearch as EventListener);
        };
    }, []);

    useGSAP(() => {
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            );
        }
    }, { scope: headerRef });

    useGSAP(() => {
        if (!mobileMenuRef.current) return;

        if (mobileMenuOpen) {
            gsap.fromTo(mobileMenuRef.current,
                { opacity: 0, y: -20, display: "none" },
                { opacity: 1, y: 0, display: "flex", duration: 0.3, ease: "power2.out" }
            );
        } else {
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                y: -10,
                duration: 0.2,
                ease: "power2.in",
                onComplete: () => {
                    if (mobileMenuRef.current) {
                        mobileMenuRef.current.style.display = "none";
                    }
                }
            });
        }
    }, { dependencies: [mobileMenuOpen] });

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
                ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border-secondary"
                : "bg-transparent"
                }`}
        >
            <div className="container-docs flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <Image
                        src="/brokenn-shell.svg"
                        alt={`${SITE_CONFIG.name} Logo`}
                        width={32}
                        height={32}
                        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="text-base font-semibold tracking-tight text-text-primary">
                        {SITE_CONFIG.name}
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) =>
                        "external" in link && link.external ? (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-bg-tertiary/50 transition-colors"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="px-3.5 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-bg-tertiary/50 transition-colors"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Global Search Button */}
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="w-9 h-9 rounded-lg border border-border-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-primary hover:bg-bg-tertiary/50 transition-colors"
                        aria-label="Search documentation"
                    >
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
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>

                    <a
                        href={SITE_CONFIG.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border border-border-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-primary transition-colors"
                        aria-label="GitHub Repository"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-9 h-9 rounded-lg border border-border-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-primary hover:bg-bg-tertiary/50 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {mobileMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div
                ref={mobileMenuRef}
                className="md:hidden absolute top-16 left-0 right-0 bg-bg-primary/95 backdrop-blur-xl border-b border-border-secondary hidden flex-col w-full px-4 py-4 gap-2 shadow-2xl h-[calc(100vh-64px)] overflow-y-auto"
            >
                {NAV_LINKS.map((link) =>
                    "external" in link && link.external ? (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-text-secondary hover:text-text-primary py-3 border-b border-border-secondary/50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ) : (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium text-text-secondary hover:text-text-primary py-3 border-b border-border-secondary/50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    )
                )}
            </div>

            <SearchOverlay
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
        </header>
    );
}
