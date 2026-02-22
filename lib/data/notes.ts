import type { NoteMetadata, NoteTopic } from "@/types";

export const noteTopics: Record<string, NoteTopic[]> = {
    "full-stack": [
        {
            id: "fs-fundamentals",
            title: "Fundamentals",
            slug: "fundamentals",
            children: [
                { id: "fs-html-css", title: "HTML & CSS", slug: "html-css" },
                { id: "fs-javascript", title: "JavaScript", slug: "javascript" },
                { id: "fs-typescript", title: "TypeScript", slug: "typescript" },
            ],
        },
    ],
    "ai-ml": [
        {
            id: "ml-foundations",
            title: "Foundations",
            slug: "foundations",
            children: [
                { id: "ml-python-ds", title: "Python for DS", slug: "python-data-science" },
                { id: "ml-math", title: "Math for ML", slug: "math-for-ml" },
                { id: "ml-algorithms", title: "ML Algorithms", slug: "ml-algorithms" },
            ],
        },
    ],
    "app-dev": [
        {
            id: "ad-mobile",
            title: "Mobile Dev",
            slug: "mobile-dev",
            children: [
                { id: "ad-rn", title: "React Native", slug: "react-native" },
                { id: "ad-flutter", title: "Flutter", slug: "flutter" },
                { id: "ad-patterns", title: "Architecture", slug: "architecture" },
            ],
        },
    ],
    "cyber-security": [
        {
            id: "cs-basics",
            title: "Security Basics",
            slug: "security-basics",
            children: [
                { id: "cs-networking", title: "Networking", slug: "networking" },
                { id: "cs-linux", title: "Linux Security", slug: "linux-security" },
                { id: "cs-owasp", title: "OWASP Top 10", slug: "owasp-top-10" },
            ],
        },
    ],
    "gen-ai": [
        {
            id: "ga-core",
            title: "Core Concepts",
            slug: "core-concepts",
            children: [
                { id: "ga-prompting", title: "Prompt Engineering", slug: "prompt-engineering" },
                { id: "ga-rag", title: "RAG Systems", slug: "rag-systems" },
                { id: "ga-agents", title: "AI Agents", slug: "ai-agents" },
            ],
        },
    ],
    devops: [
        {
            id: "do-infra",
            title: "Infrastructure",
            slug: "infrastructure",
            children: [
                { id: "do-docker", title: "Docker", slug: "docker" },
                { id: "do-k8s", title: "Kubernetes", slug: "kubernetes" },
                { id: "do-cicd", title: "CI/CD", slug: "cicd" },
            ],
        },
    ],
};

export const notesMeta: Record<string, NoteMetadata[]> = {
    "full-stack": [
        {
            title: "HTML & CSS Fundamentals",
            description: "Semantic HTML, modern CSS layouts, and responsive design patterns.",
            slug: "html-css",
            domainSlug: "full-stack",
            topicSlug: "fundamentals",
            lastUpdated: "2025-12-15",
            author: "BrokenN Shell",
            tags: ["html", "css", "responsive"],
            order: 1,
        },
        {
            title: "JavaScript Deep Dive",
            description: "Closures, prototypes, async/await, and modern JS patterns.",
            slug: "javascript",
            domainSlug: "full-stack",
            topicSlug: "fundamentals",
            lastUpdated: "2025-12-20",
            author: "BrokenN Shell",
            tags: ["javascript", "es6", "async"],
            order: 2,
        },
        {
            title: "TypeScript Essentials",
            description: "Type system, generics, utility types, and strict configuration.",
            slug: "typescript",
            domainSlug: "full-stack",
            topicSlug: "fundamentals",
            lastUpdated: "2026-01-05",
            author: "BrokenN Shell",
            tags: ["typescript", "types", "generics"],
            order: 3,
        },
    ],
    "ai-ml": [
        {
            title: "Python for Data Science",
            description: "NumPy, Pandas, Matplotlib, and data wrangling techniques.",
            slug: "python-data-science",
            domainSlug: "ai-ml",
            topicSlug: "foundations",
            lastUpdated: "2025-11-10",
            author: "BrokenN Shell",
            tags: ["python", "numpy", "pandas"],
            order: 1,
        },
        {
            title: "Mathematics for ML",
            description: "Linear algebra, calculus, and probability for machine learning.",
            slug: "math-for-ml",
            domainSlug: "ai-ml",
            topicSlug: "foundations",
            lastUpdated: "2025-11-20",
            author: "BrokenN Shell",
            tags: ["math", "linear-algebra", "statistics"],
            order: 2,
        },
        {
            title: "ML Algorithms",
            description: "Supervised and unsupervised learning algorithms explained.",
            slug: "ml-algorithms",
            domainSlug: "ai-ml",
            topicSlug: "foundations",
            lastUpdated: "2025-12-01",
            author: "BrokenN Shell",
            tags: ["algorithms", "regression", "classification"],
            order: 3,
        },
    ],
    "app-dev": [
        {
            title: "React Native Fundamentals",
            description: "Core components, navigation, and cross-platform best practices.",
            slug: "react-native",
            domainSlug: "app-dev",
            topicSlug: "mobile-dev",
            lastUpdated: "2025-12-10",
            author: "BrokenN Shell",
            tags: ["react-native", "mobile", "expo"],
            order: 1,
        },
        {
            title: "Flutter Development",
            description: "Dart language, widget tree, and state management with Riverpod.",
            slug: "flutter",
            domainSlug: "app-dev",
            topicSlug: "mobile-dev",
            lastUpdated: "2025-12-18",
            author: "BrokenN Shell",
            tags: ["flutter", "dart", "widgets"],
            order: 2,
        },
        {
            title: "Mobile Architecture Patterns",
            description: "MVVM, clean architecture, and dependency injection in mobile apps.",
            slug: "architecture",
            domainSlug: "app-dev",
            topicSlug: "mobile-dev",
            lastUpdated: "2026-01-02",
            author: "BrokenN Shell",
            tags: ["architecture", "mvvm", "clean-arch"],
            order: 3,
        },
    ],
    "cyber-security": [
        {
            title: "Networking Fundamentals",
            description: "TCP/IP, DNS, HTTP protocols, and packet analysis basics.",
            slug: "networking",
            domainSlug: "cyber-security",
            topicSlug: "security-basics",
            lastUpdated: "2025-11-05",
            author: "BrokenN Shell",
            tags: ["networking", "tcp-ip", "dns"],
            order: 1,
        },
        {
            title: "Linux Security",
            description: "File permissions, user management, firewalls, and hardening.",
            slug: "linux-security",
            domainSlug: "cyber-security",
            topicSlug: "security-basics",
            lastUpdated: "2025-11-15",
            author: "BrokenN Shell",
            tags: ["linux", "permissions", "firewall"],
            order: 2,
        },
        {
            title: "OWASP Top 10",
            description: "The ten most critical web application security risks explained.",
            slug: "owasp-top-10",
            domainSlug: "cyber-security",
            topicSlug: "security-basics",
            lastUpdated: "2025-12-01",
            author: "BrokenN Shell",
            tags: ["owasp", "xss", "injection"],
            order: 3,
        },
    ],
    "gen-ai": [
        {
            title: "Prompt Engineering",
            description: "Techniques for effective prompt design and structured output.",
            slug: "prompt-engineering",
            domainSlug: "gen-ai",
            topicSlug: "core-concepts",
            lastUpdated: "2026-01-10",
            author: "BrokenN Shell",
            tags: ["prompts", "few-shot", "chain-of-thought"],
            order: 1,
        },
        {
            title: "RAG Systems",
            description: "Building retrieval-augmented generation pipelines.",
            slug: "rag-systems",
            domainSlug: "gen-ai",
            topicSlug: "core-concepts",
            lastUpdated: "2026-01-15",
            author: "BrokenN Shell",
            tags: ["rag", "vector-db", "embeddings"],
            order: 2,
        },
        {
            title: "AI Agents",
            description: "Autonomous agents with tool use, memory, and reasoning.",
            slug: "ai-agents",
            domainSlug: "gen-ai",
            topicSlug: "core-concepts",
            lastUpdated: "2026-01-20",
            author: "BrokenN Shell",
            tags: ["agents", "tool-use", "reasoning"],
            order: 3,
        },
    ],
    devops: [
        {
            title: "Docker Fundamentals",
            description: "Containers, images, Dockerfiles, and multi-stage builds.",
            slug: "docker",
            domainSlug: "devops",
            topicSlug: "infrastructure",
            lastUpdated: "2025-11-25",
            author: "BrokenN Shell",
            tags: ["docker", "containers", "images"],
            order: 1,
        },
        {
            title: "Kubernetes Essentials",
            description: "Pods, services, deployments, and cluster orchestration.",
            slug: "kubernetes",
            domainSlug: "devops",
            topicSlug: "infrastructure",
            lastUpdated: "2025-12-05",
            author: "BrokenN Shell",
            tags: ["kubernetes", "pods", "helm"],
            order: 2,
        },
        {
            title: "CI/CD Pipelines",
            description: "GitHub Actions, Jenkins, and automated deployment workflows.",
            slug: "cicd",
            domainSlug: "devops",
            topicSlug: "infrastructure",
            lastUpdated: "2025-12-15",
            author: "BrokenN Shell",
            tags: ["cicd", "github-actions", "jenkins"],
            order: 3,
        },
    ],
};

export function getNotesByDomain(domainSlug: string): NoteMetadata[] {
    return notesMeta[domainSlug] ?? [];
}

export function getTopicsByDomain(domainSlug: string): NoteTopic[] {
    return noteTopics[domainSlug] ?? [];
}

export function getNoteBySlug(
    domainSlug: string,
    noteSlug: string
): NoteMetadata | undefined {
    return notesMeta[domainSlug]?.find((n) => n.slug === noteSlug);
}
