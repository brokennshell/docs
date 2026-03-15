export function cn(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(" ");
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

export function formatDate(dateString: string): string {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(dateString));
}

export function capitalize(text: string): string {
    return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function getReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

export function extractHeadings(
    content: string
): { id: string; title: string; level: number }[] {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const headings: { id: string; title: string; level: number }[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        headings.push({
            id: slugify(match[2]),
            title: match[2],
            level: match[1].length,
        });
    }

    return headings;
}

export function extractModules(
    content: string
): { id: string; title: string; parts: { id: string; title: string }[] }[] {
    const modules: { id: string; title: string; parts: { id: string; title: string }[] }[] = [];

    // Split content by module-container blocks
    const moduleRegex = /<div\s+className="module-container">[\s\S]*?<details\s+className="major-dropdown"[^>]*>\s*<summary><strong>(.+?)<\/strong><\/summary>/g;
    let moduleMatch;
    let moduleIndex = 0;

    while ((moduleMatch = moduleRegex.exec(content)) !== null) {
        const moduleTitle = moduleMatch[1];
        const moduleId = `module-${moduleIndex}`;

        // Find the end of this module (next module-container or end of content)
        const moduleStart = moduleMatch.index;
        const nextModuleStart = content.indexOf('<div className="module-container">', moduleStart + 1);
        const moduleContent = nextModuleStart !== -1
            ? content.substring(moduleStart, nextModuleStart)
            : content.substring(moduleStart);

        // Extract sub-dropdown parts within this module
        const partRegex = /<details\s+className="sub-dropdown"[^>]*>\s*<summary>(.+?)<\/summary>/g;
        const parts: { id: string; title: string }[] = [];
        let partMatch;
        let partIndex = 0;

        while ((partMatch = partRegex.exec(moduleContent)) !== null) {
            parts.push({
                id: `${moduleId}-part-${partIndex}`,
                title: partMatch[1],
            });
            partIndex++;
        }

        modules.push({ id: moduleId, title: moduleTitle, parts });
        moduleIndex++;
    }

    return modules;
}
