import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";
import enProjects from "@/content/en/projects";
import ptBRProjects from "@/content/pt-BR/projects";
import { buttonVariants } from "../ui/button";
import { Link } from "@/navigation";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const projects = locale === "pt-BR" ? ptBRProjects : enProjects;

  return (
    <section
      id="projects"
      className="bg-muted pb-12 md:pb-20 px-6 mt-[-100px] mb-[-100px]"
    >
      <div className="container max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4 relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold">{t("heading")}</h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  url,
  slug,
  cover,
}: {
  title: string;
  description: string;
  url: string;
  slug: string;
  cover: string;
  images: string[];
}) {
  const t = useTranslations("projects");

  return (
    <Card className="z-20">
      <CardHeader>
        <Image
          src={`/${cover}`}
          alt={title}
          width={640}
          height={360}
          className="rounded-lg object-cover"
        />
      </CardHeader>
      <CardContent className="!pt-0 mt-0 p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex gap-2">
          <a
            href={url}
            className={buttonVariants({ variant: "default", size: "md" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("liveDemo")}
          </a>
          <Link
            href={{
              pathname: "/projects/[slug]",
              params: { slug },
            }}
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            {t("readMore")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
