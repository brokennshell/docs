import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

interface CodeBlockProps {
    children?: React.ReactNode;
    className?: string; // language-js, language-html, etc.
}

export default async function CodeBlock({
    children,
    className,
}: CodeBlockProps) {
    const language = className ? className.replace(/language-/, "") : "text";

    // Extract the raw code string from children
    let code = "";
    if (typeof children === "string") {
        code = children;
    } else if (Array.isArray(children)) {
        code = children.join("");
    } else if (children && typeof children === "object" && "props" in children) {
        // Sometimes next-mdx passes a single child object
        code = String((children as { props?: { children?: unknown } }).props?.children || "");
    }

    code = code.trimEnd();

    let html = "";
    try {
        html = await codeToHtml(code, {
            lang: language,
            theme: "vitesse-dark",
        });
    } catch {
        // Fallback or ignore
    }

    if (!html) {
        return (
            <div className="relative group my-6">
                <CopyButton code={code} />
                <pre className="p-5 bg-bg-tertiary rounded-xl overflow-x-auto border border-border-secondary">
                    <code className={className}>{code}</code>
                </pre>
            </div>
        );
    }

    return (
        <div className="relative group my-6">
            <div className="absolute right-12 top-3 px-2 py-1 text-xs font-mono font-medium rounded bg-bg-tertiary/50 text-text-tertiary border border-border-secondary uppercase z-10 select-none">
                {language}
            </div>
            <CopyButton code={code} />
            <div
                className="shiki-container text-[13px] md:text-sm [&>pre]:!bg-[#0a0a0f] [&>pre]:!p-5 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-border-secondary [&>pre]:shadow-sm [&>pre]:overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}
