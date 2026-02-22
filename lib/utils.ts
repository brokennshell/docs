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
