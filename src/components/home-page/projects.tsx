import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";
import enProjects from "@/content/en/projects";
import ptBRProjects from "@/content/pt-BR/projects";

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  
  const projects = locale === 'pt-BR' ? ptBRProjects : enProjects;

  return (
    <section
      id="projects"
      className="bg-muted pb-12 md:pb-20 px-6 mt-[-100px] mb-[-100px]"
    >
      <div className="container max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4 relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('heading')}
          </h2>
          <p className="text-muted-foreground">
            {t('description')}
          </p>
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

function ProjectCard({ title, description, url, github, cover, images }: {
  title: string;
  description: string;
  url: string;
  github: string;
  cover: string;
  images: string[];
}) {
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
          <Link
            href={url}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Link>
          <Link
            href={github}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
