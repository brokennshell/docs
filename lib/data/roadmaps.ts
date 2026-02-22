import type { Roadmap } from "@/types";

export const roadmaps: Record<string, Roadmap> = {
    "full-stack": {
        id: "full-stack-roadmap",
        domainSlug: "full-stack",
        title: "Full Stack Developer Roadmap",
        description:
            "A structured path from frontend basics to full-stack production deployment.",
        steps: [
            {
                id: "fs-1",
                title: "HTML, CSS & JavaScript Fundamentals",
                description:
                    "Master the building blocks of the web. Understand semantic HTML, CSS layouts (Flexbox, Grid), and core JavaScript concepts including ES6+ syntax.",
                topics: ["Semantic HTML", "CSS Grid & Flexbox", "ES6+ JavaScript", "DOM Manipulation"],
                resources: [
                    { title: "MDN Web Docs", url: "https://developer.mozilla.org", type: "docs" },
                    { title: "JavaScript.info", url: "https://javascript.info", type: "article" },
                ],
                status: "beginner",
            },
            {
                id: "fs-2",
                title: "Frontend Framework (React)",
                description:
                    "Learn component-based architecture with React. Understand hooks, state management, routing, and the React ecosystem.",
                topics: ["React Hooks", "Component Patterns", "React Router", "State Management"],
                resources: [
                    { title: "React Official Docs", url: "https://react.dev", type: "docs" },
                    { title: "Full Stack Open", url: "https://fullstackopen.com", type: "course" },
                ],
                status: "beginner",
            },
            {
                id: "fs-3",
                title: "TypeScript",
                description:
                    "Add type safety to your JavaScript. Learn generics, utility types, declaration files, and strict configuration.",
                topics: ["Type System", "Generics", "Utility Types", "Type Guards"],
                resources: [
                    { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "fs-4",
                title: "Backend Development (Node.js)",
                description:
                    "Build RESTful APIs with Node.js and Express. Learn middleware, authentication, error handling, and API design best practices.",
                topics: ["Express.js", "REST API Design", "Authentication (JWT)", "Middleware"],
                resources: [
                    { title: "Node.js Official Docs", url: "https://nodejs.org/en/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "fs-5",
                title: "Databases & ORM",
                description:
                    "Work with SQL and NoSQL databases. Learn query optimization, schema design, and use ORMs like Prisma or Mongoose.",
                topics: ["PostgreSQL", "MongoDB", "Prisma ORM", "Query Optimization"],
                resources: [
                    { title: "Prisma Documentation", url: "https://www.prisma.io/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "fs-6",
                title: "Next.js & Full Stack Frameworks",
                description:
                    "Build production-grade apps with Next.js. Server components, API routes, SSR/SSG, middleware, and deployment.",
                topics: ["App Router", "Server Components", "API Routes", "SSR & SSG"],
                resources: [
                    { title: "Next.js Documentation", url: "https://nextjs.org/docs", type: "docs" },
                ],
                status: "advanced",
            },
            {
                id: "fs-7",
                title: "Testing & Deployment",
                description:
                    "Write unit, integration, and E2E tests. Deploy to Vercel, AWS, or Docker containers with CI/CD pipelines.",
                topics: ["Jest & Vitest", "Cypress / Playwright", "Docker", "CI/CD"],
                resources: [
                    { title: "Testing Library Docs", url: "https://testing-library.com", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
    "ai-ml": {
        id: "ai-ml-roadmap",
        domainSlug: "ai-ml",
        title: "AI & Machine Learning Roadmap",
        description:
            "From mathematical foundations to production ML systems.",
        steps: [
            {
                id: "ml-1",
                title: "Mathematics for ML",
                description:
                    "Build strong foundations in linear algebra, calculus, probability, and statistics essential for understanding ML algorithms.",
                topics: ["Linear Algebra", "Calculus", "Probability & Statistics", "Optimization"],
                resources: [
                    { title: "3Blue1Brown Linear Algebra", url: "https://www.3blue1brown.com", type: "video" },
                    { title: "Khan Academy Statistics", url: "https://www.khanacademy.org", type: "course" },
                ],
                status: "beginner",
            },
            {
                id: "ml-2",
                title: "Python for Data Science",
                description:
                    "Master Python libraries for data manipulation, visualization, and scientific computing.",
                topics: ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks"],
                resources: [
                    { title: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/", type: "article" },
                ],
                status: "beginner",
            },
            {
                id: "ml-3",
                title: "Classical Machine Learning",
                description:
                    "Learn supervised and unsupervised algorithms: regression, classification, clustering, and ensemble methods.",
                topics: ["Linear Regression", "Decision Trees", "SVM", "K-Means Clustering"],
                resources: [
                    { title: "Scikit-learn Documentation", url: "https://scikit-learn.org", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ml-4",
                title: "Deep Learning",
                description:
                    "Understand neural network architectures, backpropagation, CNNs, RNNs, and transformers using PyTorch or TensorFlow.",
                topics: ["Neural Networks", "CNNs", "RNNs & LSTMs", "Transformers"],
                resources: [
                    { title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/", type: "docs" },
                    { title: "Deep Learning Specialization", url: "https://www.deeplearning.ai", type: "course" },
                ],
                status: "advanced",
            },
            {
                id: "ml-5",
                title: "MLOps & Production ML",
                description:
                    "Deploy ML models to production. Model versioning, monitoring, feature stores, and ML pipeline orchestration.",
                topics: ["MLflow", "Model Serving", "Feature Stores", "A/B Testing"],
                resources: [
                    { title: "Made With ML", url: "https://madewithml.com", type: "course" },
                ],
                status: "advanced",
            },
        ],
    },
    "app-dev": {
        id: "app-dev-roadmap",
        domainSlug: "app-dev",
        title: "Mobile App Development Roadmap",
        description:
            "Build cross-platform and native mobile applications.",
        steps: [
            {
                id: "ad-1",
                title: "Mobile Development Fundamentals",
                description:
                    "Understand mobile architecture patterns, platform differences, and UI/UX principles for mobile apps.",
                topics: ["Mobile UX Patterns", "Platform Guidelines", "App Lifecycle", "Navigation"],
                resources: [
                    { title: "Material Design", url: "https://material.io", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "ad-2",
                title: "React Native",
                description:
                    "Build cross-platform apps with React Native. Learn native modules, navigation, state management, and performance optimization.",
                topics: ["Core Components", "React Navigation", "Native Modules", "Expo"],
                resources: [
                    { title: "React Native Docs", url: "https://reactnative.dev", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ad-3",
                title: "Flutter & Dart",
                description:
                    "Cross-platform development with Flutter. Widget tree, state management with Riverpod/Bloc, and platform channels.",
                topics: ["Dart Language", "Widget System", "State Management", "Platform Channels"],
                resources: [
                    { title: "Flutter Documentation", url: "https://flutter.dev/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ad-4",
                title: "App Store Deployment & CI/CD",
                description:
                    "Publish apps to Google Play and App Store. Configure Fastlane, code signing, and automated testing pipelines.",
                topics: ["App Signing", "Fastlane", "TestFlight", "Play Console"],
                resources: [
                    { title: "Fastlane Docs", url: "https://docs.fastlane.tools", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
    "cyber-security": {
        id: "cyber-security-roadmap",
        domainSlug: "cyber-security",
        title: "Cyber Security Roadmap",
        description:
            "From networking basics to advanced penetration testing and threat analysis.",
        steps: [
            {
                id: "cs-1",
                title: "Networking & OS Fundamentals",
                description:
                    "Understand TCP/IP, DNS, HTTP, Linux administration, and how operating systems manage security.",
                topics: ["TCP/IP Stack", "DNS & HTTP", "Linux Administration", "File Permissions"],
                resources: [
                    { title: "Professor Messer Network+", url: "https://www.professormesser.com", type: "video" },
                ],
                status: "beginner",
            },
            {
                id: "cs-2",
                title: "Security Fundamentals",
                description:
                    "Learn CIA triad, authentication mechanisms, encryption basics, and common vulnerability types.",
                topics: ["CIA Triad", "OWASP Top 10", "Encryption Basics", "Authentication"],
                resources: [
                    { title: "OWASP Foundation", url: "https://owasp.org", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "cs-3",
                title: "Penetration Testing",
                description:
                    "Hands-on ethical hacking. Learn reconnaissance, exploitation, post-exploitation, and report writing.",
                topics: ["Nmap & Recon", "Metasploit", "Web App Testing", "Privilege Escalation"],
                resources: [
                    { title: "TryHackMe", url: "https://tryhackme.com", type: "course" },
                    { title: "Hack The Box", url: "https://www.hackthebox.com", type: "course" },
                ],
                status: "intermediate",
            },
            {
                id: "cs-4",
                title: "Cryptography",
                description:
                    "Symmetric and asymmetric encryption, hashing algorithms, PKI, digital signatures, and TLS/SSL.",
                topics: ["AES & RSA", "Hashing (SHA, bcrypt)", "PKI & Certificates", "TLS Handshake"],
                resources: [
                    { title: "Crypto101", url: "https://www.crypto101.io", type: "article" },
                ],
                status: "advanced",
            },
            {
                id: "cs-5",
                title: "Security Operations & Incident Response",
                description:
                    "SIEM tools, log analysis, threat hunting, incident response playbooks, and forensics basics.",
                topics: ["SIEM", "Log Analysis", "Incident Response", "Digital Forensics"],
                resources: [
                    { title: "SANS Reading Room", url: "https://www.sans.org/reading-room/", type: "article" },
                ],
                status: "advanced",
            },
        ],
    },
    "gen-ai": {
        id: "gen-ai-roadmap",
        domainSlug: "gen-ai",
        title: "Generative AI Roadmap",
        description:
            "From prompt engineering to building production AI applications.",
        steps: [
            {
                id: "ga-1",
                title: "LLM Fundamentals",
                description:
                    "Understand transformer architecture, tokenization, attention mechanisms, and how large language models work.",
                topics: ["Transformer Architecture", "Tokenization", "Attention Mechanism", "Pre-training"],
                resources: [
                    { title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762", type: "article" },
                ],
                status: "beginner",
            },
            {
                id: "ga-2",
                title: "Prompt Engineering",
                description:
                    "Master prompt design patterns: few-shot, chain-of-thought, system prompts, and structured output generation.",
                topics: ["Few-Shot Prompting", "Chain of Thought", "System Prompts", "Output Parsing"],
                resources: [
                    { title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "ga-3",
                title: "RAG Systems",
                description:
                    "Build Retrieval-Augmented Generation pipelines. Vector databases, embedding models, chunking strategies, and retrieval optimization.",
                topics: ["Vector Databases", "Embeddings", "Chunking Strategies", "Hybrid Search"],
                resources: [
                    { title: "LangChain Documentation", url: "https://docs.langchain.com", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ga-4",
                title: "Fine-Tuning & RLHF",
                description:
                    "Fine-tune models with LoRA/QLoRA, RLHF pipelines, and evaluation frameworks for domain-specific tasks.",
                topics: ["LoRA & QLoRA", "RLHF", "Evaluation Metrics", "Dataset Curation"],
                resources: [
                    { title: "Hugging Face PEFT", url: "https://huggingface.co/docs/peft", type: "docs" },
                ],
                status: "advanced",
            },
            {
                id: "ga-5",
                title: "AI Agents & Tool Use",
                description:
                    "Build autonomous AI agents with tool calling, multi-step reasoning, memory systems, and orchestration frameworks.",
                topics: ["Agent Architecture", "Tool Calling", "Memory Systems", "Multi-Agent"],
                resources: [
                    { title: "LangGraph Docs", url: "https://langchain-ai.github.io/langgraph/", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
    devops: {
        id: "devops-roadmap",
        domainSlug: "devops",
        title: "DevOps Roadmap",
        description:
            "Infrastructure automation, CI/CD, and cloud-native practices.",
        steps: [
            {
                id: "do-1",
                title: "Linux & Scripting",
                description:
                    "Command-line proficiency, shell scripting, process management, and system administration fundamentals.",
                topics: ["Bash Scripting", "Process Management", "Cron Jobs", "File Systems"],
                resources: [
                    { title: "Linux Journey", url: "https://linuxjourney.com", type: "course" },
                ],
                status: "beginner",
            },
            {
                id: "do-2",
                title: "Version Control & CI/CD",
                description:
                    "Advanced Git workflows, GitHub Actions, Jenkins, and continuous integration/deployment pipelines.",
                topics: ["Git Workflows", "GitHub Actions", "Jenkins", "Pipeline Design"],
                resources: [
                    { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "do-3",
                title: "Containerization (Docker)",
                description:
                    "Container fundamentals, Dockerfile optimization, multi-stage builds, Docker Compose, and container networking.",
                topics: ["Dockerfiles", "Multi-Stage Builds", "Docker Compose", "Container Networking"],
                resources: [
                    { title: "Docker Documentation", url: "https://docs.docker.com", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "do-4",
                title: "Kubernetes",
                description:
                    "Container orchestration at scale. Pods, services, deployments, Helm charts, and cluster management.",
                topics: ["Pods & Services", "Deployments", "Helm Charts", "Ingress"],
                resources: [
                    { title: "Kubernetes Docs", url: "https://kubernetes.io/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "do-5",
                title: "Infrastructure as Code",
                description:
                    "Manage infrastructure with Terraform and Ansible. Cloud provisioning, state management, and configuration drift.",
                topics: ["Terraform", "Ansible", "CloudFormation", "State Management"],
                resources: [
                    { title: "Terraform Documentation", url: "https://developer.hashicorp.com/terraform", type: "docs" },
                ],
                status: "advanced",
            },
            {
                id: "do-6",
                title: "Monitoring & Observability",
                description:
                    "Implement logging, metrics, and tracing with Prometheus, Grafana, ELK stack, and distributed tracing.",
                topics: ["Prometheus", "Grafana", "ELK Stack", "OpenTelemetry"],
                resources: [
                    { title: "Grafana Documentation", url: "https://grafana.com/docs/", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
};

export function getRoadmapByDomain(domainSlug: string): Roadmap | undefined {
    return roadmaps[domainSlug];
}
