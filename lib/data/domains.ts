import type { Domain } from "@/types";

export const domains: Domain[] = [
    {
        id: "full-stack",
        title: "Full Stack",
        slug: "full-stack",
        description:
            "End-to-end web development from frontend frameworks to backend APIs, databases, and deployment pipelines.",
        icon: "⚡",
        color: "#3b82f6",
        tagColor: "#3b82f6",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "ai-ml",
        title: "AI & ML",
        slug: "ai-ml",
        description:
            "Machine learning fundamentals, neural networks, model training, and production ML system design.",
        icon: "🧠",
        color: "#8b5cf6",
        tagColor: "#8b5cf6",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "app-dev",
        title: "App Dev",
        slug: "app-dev",
        description:
            "Cross-platform and native mobile app development with React Native, Flutter, and Swift.",
        icon: "📱",
        color: "#06b6d4",
        tagColor: "#06b6d4",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "cyber-security",
        title: "Cyber Security",
        slug: "cyber-security",
        description:
            "Security fundamentals, penetration testing, cryptography, and secure system architecture.",
        icon: "🛡️",
        color: "#ef4444",
        tagColor: "#ef4444",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "gen-ai",
        title: "GenAI",
        slug: "gen-ai",
        description:
            "Generative AI, large language models, prompt engineering, RAG systems, and AI application development.",
        icon: "✨",
        color: "#f59e0b",
        tagColor: "#f59e0b",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "devops",
        title: "DevOps",
        slug: "devops",
        description:
            "CI/CD pipelines, containerization, infrastructure as code, monitoring, and cloud-native practices.",
        icon: "🔧",
        color: "#10b981",
        tagColor: "#10b981",
        roadmapCount: 1,
        noteCount: 3,
    },
];

export function getDomainBySlug(slug: string): Domain | undefined {
    return domains.find((d) => d.slug === slug);
}

export function getAllDomainSlugs(): string[] {
    return domains.map((d) => d.slug);
}
