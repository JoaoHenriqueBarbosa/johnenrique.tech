import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import matter from "gray-matter";

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const contentDir = path.join(process.cwd(), "src", "content", params.locale);
  const filePath = path.join(contentDir, `${params.slug}.mdx`);

  const t = await getTranslations("common");

  if (!filePath.endsWith(".mdx")) {
    notFound();
  }

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(source);
    return (
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      notFound();
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const contentDir = path.join(process.cwd(), "src", "content", params.locale);
  const filePath = path.join(contentDir, `${params.slug}.mdx`);

  if (!filePath.endsWith(".mdx")) {
    return {};
  }

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { data } = matter(source);
    const t = await getTranslations("common");

    return {
      title: `${data.title} | ${t("meta.title")}`,
      description: data.description || t("meta.keywords"),
      keywords: data.keywords ? data.keywords.join(", ") : t("meta.keywords"),
      openGraph: {
        title: `${data.title} | ${t("meta.title")}`,
        description: data.description || t("meta.keywords"),
        type: "article",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.locale}/${params.slug}`,
        publishedTime: data.date ? new Date(data.date).toISOString() : undefined,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/john.png`,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.locale}/${params.slug}`,
      twitter: {
        card: "summary_large_image",
        title: `${data.title} | ${t("meta.title")}`,
        description: data.description || t("meta.keywords"),
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/john.png`,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return {};
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
