import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Image from "next/image";
import { Header } from "@/components/home-page/header";
import { Footer } from "@/components/home-page/footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import matter from "gray-matter";
import { Projects } from "@/components/home-page/projects";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function BlogPost({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const commonT = await getTranslations("common");

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
    const file = await fs.readFile(filePath, "utf8");
    const parsed = matter(file);
    const { content, data } = parsed;
    return (
      <>
        <body
          className={cn(
            "min-h-screen font-sans antialiased bg-muted",
            fontSans.variable
          )}
        >
          <div className="flex flex-col min-h-dvh relative">
            <Header />
            <section className="relative w-full">
              <Image
                src="/holo-2.webp"
                alt="Hero Image"
                width={1120}
                height={630}
                quality={100}
                className="w-full object-cover object-center h-[350px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-10% to-60% from-muted/100 to-muted/0" />
              <div className="absolute inset-0 flex flex-col px-4 justify-center">
                <div className="container mx-auto">
                  <div className="h-[98px]"></div>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                          {commonT("home")}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/blog">
                          {commonT("blog")}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{params.slug}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className="text-3xl mt-4 font-bold tracking-tight text-black md:text-5xl drop-shadow-xl">
                    {data.title}
                  </h1>
                  <p className="mt-4 text-black md:text-xl drop-shadow-xl">
                    {data.description}
                  </p>
                </div>
              </div>
            </section>
            <main className="flex-1 container mx-auto z-20 max-w-6xl">
              <div className="px-4 pb-8">
                <article className="prose dark:prose-invert max-w-none remark">
                  <MDXRemote source={content} components={{ Projects, Link }} />
                </article>
                <hr />
                <div className="mt-1">{data.author}</div>
                <div className="mt-1">
                  {data.date.toLocaleDateString(params.locale)}
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </body>
      </>
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      notFound();
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const contentDir = path.join(process.cwd(), 'src', 'content', params.locale, 'blog');
  const filePath = path.join(contentDir, `${params.slug}.mdx`);

  if (!filePath.endsWith('.mdx')) {
    return {};
  }

  try {
    const file = await fs.readFile(filePath, 'utf8');
    const { data } = matter(file);

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      openGraph: {
        title: data.title,
        description: data.description,
        type: 'article',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.locale}/blog/${params.slug}`,
        publishedTime: data.date.toISOString(),
        authors: [data.author],
        images: data.cover
          ? [`${process.env.NEXT_PUBLIC_SITE_URL}/${data.cover}`]
          : [`${process.env.NEXT_PUBLIC_SITE_URL}/john.jpg`],
      },
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.locale}/blog/${params.slug}`,
      twitter: {
        card: "summary_large_image",
        title: data.title,
        description: data.description,
        images: data.cover
          ? [`${process.env.NEXT_PUBLIC_SITE_URL}/${data.cover}`]
          : [`${process.env.NEXT_PUBLIC_SITE_URL}/john.jpg`],
      },
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return {};
    }
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}
