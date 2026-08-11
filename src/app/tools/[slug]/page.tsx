import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { TOOL_MAP } from "@/lib/tool-data";
import { TOOL_CONTENT_MAP } from "@/lib/tool-content";
import { ArrowRight } from "lucide-react";
import ToolClient from "./tool-client";
import { ToolSeoContent } from "@/components/tool-seo-content";
import { GrammarlyAffiliate } from "@/components/grammarly-affiliate";
import { GoogleAd } from "@/components/google-ad";

interface Props {
  params: Promise<{ slug: string }>;
}

const DEDICATED_SLUGS = new Set([
  "word-counter",
  "character-counter",
  "case-converter",
  "duplicate-line-remover",
  "keyword-density-checker",
  "markdown-preview",
  "paragraph-counter",
  "random-text-generator",
  "reading-time-calculator",
  "remove-extra-spaces",
  "sentence-counter",
  "speaking-time-calculator",
  "text-compare",
  "text-statistics",
]);

export async function generateStaticParams() {
  return Array.from(TOOL_MAP.keys())
    .filter((slug) => !DEDICATED_SLUGS.has(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOL_MAP.get(slug);
  const content = TOOL_CONTENT_MAP[slug];

  if (!tool) {
    return {
      title: "Tool Not Found — TextTools",
      description: "The requested text tool does not exist.",
    };
  }

  const title = content?.title || `${tool.name} — TextTools`;
  const description = content?.metaDescription || tool.seoDescription;
  const keywords = content?.keywords || `${tool.name.toLowerCase()}, text tools, online formatter`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: tool.href },
    openGraph: {
      title,
      description,
      url: tool.href,
      type: "website",
      siteName: "TextTools",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = TOOL_MAP.get(slug);
  const content = TOOL_CONTENT_MAP[slug];

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
        <p className="text-muted-foreground mb-6">The tool you are looking for does not exist yet or has been moved.</p>
        <Link href="/tools" className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
          <ArrowRight className="h-4 w-4 ml-2" /> Browse all tools
        </Link>
      </div>
    );
  }

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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://text-tools-swart.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://text-tools-swart.vercel.app/tools" },
      { "@type": "ListItem", position: 3, name: tool.name, item: `https://text-tools-swart.vercel.app${tool.href}` },
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

  return (
    <>
      <Script id="tool-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <Script id="tool-breadcrumb" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <Script id="tool-faq-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <div className="mb-8">
          <nav className="flex text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>
                <div className="flex items-center"><span className="mx-2">/</span><Link href="/tools" className="hover:text-primary">Tools</Link></div>
              </li>
              <li aria-current="page">
                <div className="flex items-center"><span className="mx-2">/</span><span className="text-foreground font-medium">{tool.name}</span></div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{tool.name}</h1>
          <p className="text-muted-foreground">{tool.desc}</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          {/** Pass a plain serializable object to the client component (remove non-serializable icon) */}
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
