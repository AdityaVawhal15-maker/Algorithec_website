interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageStructuredDataProps {
  title: string;
  description: string;
  url: string;
  breadcrumbs: BreadcrumbItem[];
  pageType?: "WebPage" | "AboutPage" | "ContactPage";
}

export function PageStructuredData({
  title,
  description,
  url,
  breadcrumbs,
  pageType = "WebPage",
}: PageStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": pageType,
        "@id": `${url}#webpage`,
        url: url,
        name: title,
        description: description,
        isPartOf: {
          "@id": "https://algorithec.com/#website",
        },
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
