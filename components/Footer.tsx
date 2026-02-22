import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = [
    {
        title: "Domains",
        links: [
            { label: "Full Stack", href: "/full-stack" },
            { label: "AI & ML", href: "/ai-ml" },
            { label: "App Dev", href: "/app-dev" },
            { label: "Cyber Security", href: "/cyber-security" },
            { label: "GenAI", href: "/gen-ai" },
            { label: "DevOps", href: "/devops" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Roadmaps", href: "/#domains" },
            { label: "Notes", href: "/#domains" },
            { label: "GitHub", href: SITE_CONFIG.github, external: true },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-border-secondary bg-bg-secondary/50">
            <div className="container-docs py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <Link href="/" className="flex items-center gap-2.5 mb-3">
                            <div className="w-7 h-7 rounded-md bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-accent-primary"
                                >
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-text-primary">
                                {SITE_CONFIG.name}
                            </span>
                        </Link>
                        <p className="text-sm text-text-tertiary leading-relaxed max-w-xs">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-4">
                                {group.title}
                            </h4>
                            <ul className="space-y-2.5">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        {"external" in link && link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-6 border-t border-border-secondary flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-text-tertiary">
                        &copy; {new Date().getFullYear()} {SITE_CONFIG.author}. Open
                        source under MIT License.
                    </p>
                    <p className="text-xs text-text-tertiary">
                        Built with Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
