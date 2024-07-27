import { promises as fs } from "fs";
import path from "path";
import { Link } from "@/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
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
import { LocaleRouteParams } from "../types";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

async function getBlogPosts(locale: string): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "src", "content", locale, "blog");
  const files = await fs.readdir(contentDir);
  return Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const parsed = matter(
          await fs.readFile(path.join(contentDir, file), "utf8")
        );

        return {
          slug: file.replace(/\.mdx$/, ""),
          ...parsed.data,
        } as BlogPost;
      })
  );
}

export default async function BlogIndex({
  params,
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("blogPage");
  const commonT = await getTranslations("common");
  const blogPosts = await getBlogPosts(params.locale);

  return (
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
                  <BreadcrumbLink href="/">{commonT("home")}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{t("blogTitle")}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl mt-4 font-bold tracking-tight text-black md:text-5xl drop-shadow-xl">
              {t("blogTitle")}
            </h1>
            <p className="mt-4 max-w-xl text-black md:text-xl drop-shadow-xl">
              {t("blogDescription")}
            </p>
          </div>
        </div>
      </section>
      <main className="flex-1 container mx-auto">
        <div className="px-4 pb-8">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <li
                key={post.slug}
                className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
              >
                <Link
                  href={{
                    pathname: "/blog/[slug]",
                    params: { slug: post.slug },
                  }}
                  className="block"
                >
                  <h2 className="text-xl font-semibold mb-2 hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{commonT("readMore")} →</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateMetadata({                                                                                              
  params: { locale, slug },                                                                                                           
}: LocaleRouteParams & { params: { slug: string } }) {                                                                                
  const contentDir = path.join(                                                                                                       
    process.cwd(),                                                                                                                    
    "src",                                                                                                                            
    "content",                                                                                                                        
    locale,                                                                                                                           
    "projects"                                                                                                                        
  );                                                                                                                                  
  const filePath = path.join(contentDir, `${slug}.mdx`);                                                                              
                                                                                                                                      
  if (!filePath.endsWith(".mdx")) {                                                                                                   
    return {};                                                                                                                        
  }                                                                                                                                   
                                                                                                                                      
  try {                                                                                                                               
    const file = await fs.readFile(filePath, "utf8");                                                                                 
    const { data } = matter(file);                                                                                                    
    const commonT = await getTranslations("common");                                                                                  
                                                                                                                                      
    return {                                                                                                                          
      title: `${data.title} | ${commonT("meta.title")}`,                                                                              
      description: data.description,                                                                                                  
      keywords: data.keywords?.join(", "),                                                                                            
      openGraph: {                                                                                                                    
        title: `${data.title} | ${commonT("meta.title")}`,                                                                            
        description: data.description,                                                                                                
        type: "article",                                                                                                              
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/projects/${slug}`,                                                                     
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/${data.cover}`],                                                                             
      },                                                                                                                              
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/projects/${slug}`,                                                                 
    };                                                                                                                                
  } catch (error) {                                                                                                                   
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {                                                                         
      return {};                                                                                                                      
    }                                                                                                                                 
    console.error(`Error reading file: ${filePath}`, error);                                                                          
    throw error;                                                                                                                      
  }                                                                                                                                   
}