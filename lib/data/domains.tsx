import type { ReactNode } from "react";
import type { Domain, Lang, TranslatableString } from "@/types";

interface RawDomain {
    id: string;
    title: TranslatableString;
    slug: string;
    description: TranslatableString;
    icon: ReactNode;
    color: string;
    tagColor: string;
    roadmapCount: number;
    noteCount: number;
}

const rawDomains: RawDomain[] = [
    {
        id: "full-stack",
        title: { en: "Full Stack", hi: "Pura Stack (Full Stack)" },
        slug: "full-stack",
        description: {
            en: "End-to-end web development from frontend frameworks to backend APIs, databases, and deployment pipelines.",
            hi: "Shuru se ant tak web development, frontend framework se lekar backend API, database, aur deployment tak sab kuch."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>,
        color: "#3b82f6",
        tagColor: "#3b82f6",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "ai-ml",
        title: { en: "AI & ML", hi: "AI aur ML" },
        slug: "ai-ml",
        description: {
            en: "Machine learning fundamentals, neural networks, model training, and production ML system design.",
            hi: "Machine learning ke basic concepts, neural networks, model banana, aur real-world me ML system design karna."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
        color: "#8b5cf6",
        tagColor: "#8b5cf6",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "app-dev",
        title: { en: "App Dev", hi: "App Banayein" },
        slug: "app-dev",
        description: {
            en: "Cross-platform and native mobile app development with React Native, Flutter, and Swift.",
            hi: "React Native, Flutter, aur Swift ka use karke cross-platform aur native mobile app development."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
        color: "#06b6d4",
        tagColor: "#06b6d4",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "cyber-security",
        title: { en: "Cyber Security", hi: "Cyber Suraksha" },
        slug: "cyber-security",
        description: {
            en: "Security fundamentals, penetration testing, cryptography, and secure system architecture.",
            hi: "Security ke basics, hacking check karna (penetration testing), cryptography, aur secure system banana."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>,
        color: "#ef4444",
        tagColor: "#ef4444",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "gen-ai",
        title: { en: "GenAI", hi: "GenAI" },
        slug: "gen-ai",
        description: {
            en: "Generative AI, large language models, prompt engineering, RAG systems, and AI application development.",
            hi: "Generative AI, baday language models (LLMs), prompt engineering, RAG systems, aur naye AI apps banana."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
        color: "#f59e0b",
        tagColor: "#f59e0b",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "devops",
        title: { en: "DevOps", hi: "DevOps" },
        slug: "devops",
        description: {
            en: "CI/CD pipelines, containerization, infrastructure as code, monitoring, and cloud-native practices.",
            hi: "CI/CD pipelines, Docker, infrastructure as code, monitoring, aur cloud-native kaam karne ke tareeqey."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>,
        color: "#10b981",
        tagColor: "#10b981",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "web3",
        title: { en: "Web3", hi: "Web3 (Crypto & Blockchain)" },
        slug: "web3",
        description: {
            en: "Smart contracts, decentralized applications (dApps), Ethereum, Solana, and blockchain fundamentals.",
            hi: "Smart contracts, decentralized apps (dApps), Ethereum, Solana, aur blockchain ki poori jaankari."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
        color: "#14b8a6",
        tagColor: "#14b8a6",
        roadmapCount: 0,
        noteCount: 0,
    },
    {
        id: "languages",
        title: { en: "Languages", hi: "Programming Bhashayein" },
        slug: "languages",
        description: {
            en: "Mastering core programming languages like Python, JavaScript, Rust, Go, and C++.",
            hi: "Python, JavaScript, Rust, Go, aur C++ jaisi zaruri programming bhashaon (languages) me maharat haasil karna."
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
        color: "#f43f5e",
        tagColor: "#f43f5e",
        roadmapCount: 0,
        noteCount: 0,
    }
];

export function getDomains(lang: Lang = "en"): Domain[] {
    return rawDomains.map((d) => ({
        ...d,
        title: d.title[lang],
        description: d.description[lang],
    }));
}

// Keep export for default english fallback in static contexts
export const domains: Domain[] = getDomains("en");

export function getDomainBySlug(slug: string, lang: Lang = "en"): Domain | undefined {
    return getDomains(lang).find((d) => d.slug === slug);
}

export function getAllDomainSlugs(): string[] {
    return rawDomains.map((d) => d.slug);
}
