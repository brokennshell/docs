import { MetadataRoute } from "next";
import { getAllDomainSlugs, getNotesByDomain } from "@/lib/data";

export const dynamic = "force-static";

const SITE_URL = "https://docs.brokennshell.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapData: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];

    const domains = getAllDomainSlugs();

    // Add domains pages
    domains.forEach((domain) => {
        sitemapData.push({
            url: `${SITE_URL}/${domain}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        });

        // Add notes pages
        const notes = getNotesByDomain(domain);
        notes.forEach((note) => {
            sitemapData.push({
                url: `${SITE_URL}/${domain}/notes/${note.slug}`,
                lastModified: new Date(note.lastUpdated),
                changeFrequency: "monthly",
                priority: 0.6,
            });
        });
    });

    return sitemapData;
}
