"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NoteSidebarItem } from "@/types";

interface NotesSidebarProps {
    domainSlug: string;
    items: NoteSidebarItem[];
}

export default function NotesSidebar({ domainSlug, items }: NotesSidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="w-full lg:w-64 shrink-0 py-6 lg:py-8 lg:pr-8 border-b border-border-secondary lg:border-none mb-8 lg:mb-0">
            <nav className="space-y-6 lg:space-y-8 lg:sticky lg:top-28">
                {items.map((group) => (
                    <div key={group.topic.id}>
                        <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">
                            {group.topic.title}
                        </h4>
                        <ul className="space-y-1.5 border-l border-border-secondary ml-1">
                            {group.notes.map((note) => {
                                const href = `/${domainSlug}/notes/${note.slug}`;
                                const isActive = pathname === href;

                                return (
                                    <li key={note.slug}>
                                        <Link
                                            href={href}
                                            className={`block pl-4 py-1 text-sm transition-colors border-l-2 -ml-px ${isActive
                                                ? "text-accent-primary border-accent-primary font-medium"
                                                : "text-text-tertiary border-transparent hover:text-text-secondary hover:border-border-primary"
                                                }`}
                                        >
                                            {note.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
