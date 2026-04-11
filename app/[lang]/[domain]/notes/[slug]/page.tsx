import Breadcrumbs from "@/components/Breadcrumbs";
import GithubEditLink from "@/components/GithubEditLink";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import NotesSidebar from "@/components/NotesSidebar";
import PageTransition from "@/components/PageTransition";
import SectionedNoteView from "@/components/SectionedNoteView";
import {
    getAllDomainSlugs,
    getDomainBySlug,
    getNoteBySlug,
    getNotesByDomain,
    getTopicsByDomain,
} from "@/lib/data";
import { getNoteContent } from "@/lib/mdx";
import type { NoteSidebarItem } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        lang: string;
        domain: string;
        slug: string;
    }>;
}

function sanitizeMdxSourceForCompile(source: string): string {
    if (!source) return source;

    // Escape `<` only when directly followed by `-` (e.g. `<--`, `<->`) in normal markdown text.
    // Keep fenced code blocks untouched so code examples render as authored.
    return source
        .split(/(```[\s\S]*?```)/g)
        .map((chunk) => (chunk.startsWith("```") ? chunk : chunk.replace(/<(?=-)/g, "&lt;")))
        .join("");
}

export async function generateStaticParams() {
    const params: { lang: string; domain: string; slug: string }[] = [];
    const domainSlugs = getAllDomainSlugs();

    for (const lang of ["en", "hi"]) {
        domainSlugs.forEach((domainSlug) => {
            const notes = getNotesByDomain(domainSlug, lang as "en" | "hi");
            notes.forEach((note) => {
                params.push({
                    lang,
                    domain: domainSlug,
                    slug: note.slug,
                });
            });
        });
    }

    return params;
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps) {
    const { lang, domain, slug } = await params;
    const note = getNoteBySlug(domain, slug, lang as "en" | "hi");

    if (!note) return { title: "Not Found" };

    return {
        title: `${note.title} | BrokenN Shell Docs`,
        description: note.description,
    };
}

export default async function NotePage({ params }: PageProps) {
    const { lang, domain: domainSlug, slug: noteSlug } = await params;
    const currentLang = lang as "en" | "hi";

    const domainData = getDomainBySlug(domainSlug, currentLang);
    const noteMeta = getNoteBySlug(domainSlug, noteSlug, currentLang);
    const mdxData = await getNoteContent(domainSlug, noteSlug, currentLang);

    if (!domainData || !noteMeta || !mdxData) {
        notFound();
    }

    // Build one continuous segment per top-level part (previously module)
    const sections: { id: string, title: string, element: React.ReactNode }[] = [];
    mdxData.modules.forEach((mod, index) => {
        sections.push({
            id: `part-${index + 1}`,
            title: mod.title,
            element: (
                <div className="space-y-10">
                    {mod.parts.map((part, partIndex) => {
                        const sectionTitle = part.title?.trim() || `Section ${partIndex + 1}`;
                        return (
                            <section
                                key={part.id}
                                className="rounded-xl border border-border-primary/20 bg-bg-tertiary/15 p-5 sm:p-6"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-4">
                                    {sectionTitle}
                                </h3>
                                <MDXRemote source={sanitizeMdxSourceForCompile(part.content)} components={mdxComponents} />
                            </section>
                        );
                    })}
                </div>
            ),
        });
    });

    // If no modules found, just render the whole thing as one section
    if (sections.length === 0) {
        sections.push({
            id: "part-1",
            title: noteMeta.title,
            element: <MDXRemote source={sanitizeMdxSourceForCompile(mdxData.content)} components={mdxComponents} />
        });
    }

    // Build notes sidebar tree
    const rawNotes = getNotesByDomain(domainSlug, currentLang);
    const topics = getTopicsByDomain(domainSlug, currentLang);
    const sidebarItems: NoteSidebarItem[] = topics.map((topic) => ({
        topic,
        notes: rawNotes
            .filter((n) => n.topicSlug === topic.slug)
            .sort((a, b) => a.order - b.order),
    }));

    return (
        <PageTransition>
            <div className="container-docs min-w-screen">
                <div className="flex flex-col lg:flex-row min-h-screen gap-8">
                    {/* Left Notes Navigation */}
                    <aside className="w-full lg:w-64 shrink-0 py-8 lg:sticky lg:top-24 h-fit">
                        <div className="bg-bg-secondary/40 border border-border-primary/50 rounded-2xl p-6 hidden lg:block">
                            <NotesSidebar domainSlug={domainSlug} items={sidebarItems} />
                        </div>
                        <div className="lg:hidden">
                            <NotesSidebar domainSlug={domainSlug} items={sidebarItems} />
                        </div>
                    </aside>

                    {/* Main Sectioned Content Area */}
                    <main className="flex-1 min-w-0 py-8">
                        <Breadcrumbs domain={domainData} note={noteMeta} lang={currentLang} />

                        <div className="mt-8">
                            <SectionedNoteView
                                sections={sections}
                            />
                        </div>

                        <div className="mt-12 pt-8 border-t border-border-primary/20">
                            <GithubEditLink domainSlug={domainSlug} noteSlug={noteSlug} lang={currentLang} />
                        </div>
                    </main>
                </div>
            </div>
        </PageTransition>
    );
}
