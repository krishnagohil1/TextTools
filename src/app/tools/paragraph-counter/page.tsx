import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ToolClient from "../[slug]/tool-client";
import { TOOL_MAP } from "@/lib/tool-data";
import { TOOL_CONTENT_MAP } from "@/lib/tool-content";
import { ToolSeoContent } from "@/components/tool-seo-content";
import { GrammarlyAffiliate } from "@/components/grammarly-affiliate";
import { GoogleAd } from "@/components/google-ad";

const tool = TOOL_MAP.get("paragraph-counter")!;
const content = TOOL_CONTENT_MAP["paragraph-counter"];

export const metadata: Metadata = {
  title: content?.title || `${tool.name} — TextTools`,
  description: content?.metaDescription || tool.seoDescription,
  keywords: content?.keywords,
  alternates: { canonical: tool.href },
  openGraph: {
    title: content?.title || `${tool.name} — TextTools`,
    description: content?.metaDescription || tool.seoDescription,
    url: tool.href,
    type: "website",
    siteName: "TextTools",
  },
  twitter: {
    card: "summary_large_image",
    title: content?.title || `${tool.name} — TextTools`,
    description: content?.metaDescription || tool.seoDescription,
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: tool.name,
  operatingSystem: "All",
  applicationCategory: "UtilitiesApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: content?.metaDescription || tool.seoDescription,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://texttools.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://texttools.com/tools" },
    { "@type": "ListItem", position: 3, name: tool.name, item: `https://texttools.com${tool.href}` },
  ],
};

const faqJsonLd = content?.faqs?.length
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }
  : null;

export default function ParagraphCounterPage() {
  return (
    <>
      <Script id="paragraph-counter-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <Script id="paragraph-counter-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <Script id="paragraph-counter-faq-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div></li>
              <li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">{tool.name}</span></div></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{tool.name}</h1>
          <p className="text-muted-foreground">{tool.desc}</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <ToolClient
            tool={{
              slug: tool.slug,
              name: tool.name,
              href: tool.href,
              desc: tool.desc,
              type: tool.type,
              category: tool.category,
              seoDescription: tool.seoDescription,
            }}
          />
        </div>

        <GrammarlyAffiliate />
        <GoogleAd slot="TOOL_PAGE_SLOT_ID" />

        {content && <ToolSeoContent content={content} />}
      </div>
    </>
  );
}
