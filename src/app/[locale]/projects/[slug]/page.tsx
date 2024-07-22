import { cn } from "@/lib/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter as FontSans } from "next/font/google";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects as enProjects } from "@/content/en/projects";
import { projects as ptBRProjects } from "@/content/pt-BR/projects";
import { LocaleRouteParams } from "@/app/[locale]/types";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { Readme } from "@/components/readme";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function ProjectPage({
  params: { locale, slug },
}: LocaleRouteParams & { params: { slug: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("projectPage");

  const projects = locale === "en" ? enProjects : ptBRProjects;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <head>
        <title>{project.title}</title>
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
              className="h-[30vh] w-full object-cover object-center md:h-[40vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-10% to-60% from-muted/100 to-muted/0" />
            <div className="absolute inset-0 flex flex-col justify-center px-4">
              <div className="container mx-auto">
                <div className="h-[98px]"></div>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/docs/components">
                        Components
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-3xl mt-4 font-bold tracking-tight text-black md:text-5xl drop-shadow-xl">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-xl text-black md:text-xl drop-shadow-xl">
                  {project.description}
                </p>
              </div>
            </div>
          </section>
          <main className="flex-1 container mx-auto md:mt-[-30px]">
            <div className="px-4 pb-8">
              <Carousel className="mr-10">
                <CarouselContent className="py-4 px-2">
                  <CarouselItem className="basis-1/2">
                    <Dialog>
                      <DialogTrigger>
                        <Image
                          src={`/${project.cover}`}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-lg"
                        />
                      </DialogTrigger>
                      <DialogContent>
                        <Image
                          src={`/${project.cover}`}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index} className="basis-1/2">
                      <Dialog>
                        <DialogTrigger>
                          <Image
                            src={`/${image}`}
                            alt={`${project.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                          />
                        </DialogTrigger>
                        <DialogContent>
                          <Image
                            src={`/${image}`}
                            alt={`${project.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                          />
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext />
              </Carousel>

              <div className="flex space-x-4 mt-4 mb-8">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default", size: "lg" })}
                >
                  {t("visitProject")}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  {t("viewOnGitHub")}
                </a>
              </div>

              <h2 className="text-2xl font-bold mb-4">{t("readme")}</h2>
              <Readme url={project.readme} />
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export function generateStaticParams() {
  return enProjects.map((project) => ({
    slug: project.slug,
  }));
}