import { notFound } from "next/navigation";
import {
    getDomainBySlug,
    getAllDomainSlugs,
    getRoadmapByDomain,
    getNotesByDomain,
    getTopicsByDomain,
} from "@/lib/data";
import DomainHeader from "@/components/DomainHeader";
import DomainTabs from "@/components/DomainTabs";
import PageTransition from "@/components/PageTransition";
import type { NoteSidebarItem } from "@/types";

interface PageProps {
    params: Promise<{
        domain: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllDomainSlugs();
    return slugs.map((slug) => ({
        domain: slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { domain: domainSlug } = await params;
    const domainData = getDomainBySlug(domainSlug);

    if (!domainData) {
        return {
            title: "Not Found",
        };
    }

    return {
        title: domainData.title,
        description: domainData.description,
    };
}

export default async function DomainHubPage({ params }: PageProps) {
    const { domain: domainSlug } = await params;
    const domainData = getDomainBySlug(domainSlug);

    if (!domainData) {
        notFound();
    }

    const roadmap = getRoadmapByDomain(domainSlug);
    const rawNotes = getNotesByDomain(domainSlug);
    const topics = getTopicsByDomain(domainSlug);

    // Group notes into tree structure for the sidebar
    const notesTree: NoteSidebarItem[] = topics.map((topic) => ({
        topic,
        notes: rawNotes
            .filter((n) => n.topicSlug === topic.slug)
            .sort((a, b) => a.order - b.order),
    }));

    return (
        <PageTransition>
            <DomainHeader domain={domainData} />
            <DomainTabs roadmap={roadmap} notes={notesTree} />
        </PageTransition>
    );
}
