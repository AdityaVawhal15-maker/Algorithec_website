import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://algorithec.com";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/technology`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/research`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/developers`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/company`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/security`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/refund`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/accessibility`, lastModified, changeFrequency: "monthly", priority: 0.4 },
  ];
}
