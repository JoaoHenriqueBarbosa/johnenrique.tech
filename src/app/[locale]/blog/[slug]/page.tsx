import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function BlogPost({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const contentDir = path.join(
    process.cwd(),
    "src",
    "content",
    params.locale,
    "blog"
  );
  const filePath = path.join(contentDir, `${params.slug}.mdx`);

  if (!filePath.endsWith(".mdx")) {
    notFound();
  }

  try {
    const source = await fs.readFile(filePath, "utf8");
    return (
      <article className="prose dark:prose-invert max-w-none">
        <MDXRemote source={source} />
      </article>
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      notFound();
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
