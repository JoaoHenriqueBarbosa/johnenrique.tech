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
        <head>
          <title>{data.title}</title>
        </head>
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
                className="h-[35vh] w-full object-cover object-center md:h-[40vh]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-10% to-60% from-muted/100 to-muted/0" />
              <div className="absolute inset-0 flex flex-col justify-center px-4">
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
                  <p className="mt-4 max-w-xl text-black md:text-xl drop-shadow-xl">
                    {data.description}
                  </p>
                </div>
              </div>
            </section>
            <main className="flex-1 container mx-auto mt-[-30px] z-20">
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
