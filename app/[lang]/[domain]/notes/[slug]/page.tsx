import Breadcrumbs from "@/components/Breadcrumbs";
import GithubEditLink from "@/components/GithubEditLink";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import ModuleSidebar from "@/components/ModuleSidebar";
import NotesSidebar from "@/components/NotesSidebar";
import NotesTOC from "@/components/NotesTOC";
import PageTransition from "@/components/PageTransition";
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

    // Build sidebar tree
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
            <div className="container-docs">
                <div className="flex flex-col lg:flex-row min-h-screen">
                    <NotesSidebar domainSlug={domainSlug} items={sidebarItems} />

                    <main className="flex-1 min-w-0 py-8 lg:px-8 bg-bg-primary">
                        <Breadcrumbs domain={domainData} note={noteMeta} lang={currentLang} />

                        <article className="prose-docs">
                            <MDXRemote source={mdxData.content} components={mdxComponents} />
                        </article>

                        <GithubEditLink domainSlug={domainSlug} noteSlug={noteSlug} lang={currentLang} />
                    </main>

                    {mdxData.modules.length > 0 ? (
                        <ModuleSidebar modules={mdxData.modules} />
                    ) : (
                        <NotesTOC headings={mdxData.headings} />
                    )}
                </div>
            </div>
        </PageTransition>
    );
}
