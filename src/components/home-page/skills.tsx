import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { useLocale, useTranslations } from "next-intl";
import enSkills from "@/content/en/skills";
import ptBRskills from "@/content/pt-BR/skills";

export function Skills() {
  const locale = useLocale();
  const t = useTranslations("skills");

  const skills = locale === "pt-BR" ? ptBRskills : enSkills;

  return (
    <section id="skills" className="relative w-full">
      <Image
        src="/holo-2.webp"
        alt="Hero Image"
        width={1120}
        height={630}
        quality={100}
        className="h-[40vh] w-full object-cover object-center md:h-[60vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-muted/100 via-transparent to-muted/100" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 container max-w-5xl mx-auto space-y-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("heading")}
            </h2>
            <Carousel className="w-full mt-8" opts={{
              dragFree: true,
            }}>
              <CarouselContent>
                {skills.map((skill) => (
                  <CarouselItem
                    key={skill.category}
                    className="basis-1/3 text-white rounded-lg glassmorphic !shadow-none p-6 mx-4"
                  >
                    <div className="flex gap-4 items-center">
                    {skill.icon}
                    <h3 className="text-xl font-bold select-none">{skill.category}</h3>
                    </div>
                    <ul className="mt-5">
                      {skill.items.map((item) => (
                        <li key={item} className="list-disc ml-5">
                          <h4 className="font-medium select-none">{item}</h4>
                        </li>
                      ))}
                    </ul>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
