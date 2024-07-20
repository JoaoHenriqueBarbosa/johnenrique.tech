import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  
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
          <ProjectCard
            title="Project 1"
            description="A modern e-commerce website built with React, Next.js, and Tailwind CSS."
          />
          <ProjectCard
            title="Project 2"
            description="A responsive blog website built with Next.js and Tailwind CSS."
          />
          <ProjectCard
            title="Project 3"
            description="Lorem ipsum"
          />
          <ProjectCard
            title="Project 4"
            description="A real-time chat application built with React, Socket.IO, and Tailwind CSS."
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="z-20">
      <CardHeader>
        <img
          src="/placeholder.svg"
          alt={title}
          width={640}
          height={360}
          className="rounded-t-lg object-cover"
        />
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex gap-2">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Live Demo
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            GitHub
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
