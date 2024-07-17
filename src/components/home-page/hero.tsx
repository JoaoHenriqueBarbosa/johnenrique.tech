import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useWordTyper } from "@/hooks/useWordTyper";

export function Hero() {
  const word = useWordTyper(["Complex Systems", "Web Apps", "Designs", "Middlewares", "AI Tools"]);

  return (
    <section className="relative w-full">
      <Image
        src="/holo.webp"
        alt="Hero Image"
        width={1120}
        height={630}
        quality={100}
        className="h-[60vh] w-full object-cover object-center md:h-[80vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t to-60% from-muted/100 to-muted/0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl drop-shadow-xl">
          Crafting Exceptional<br/>{word}<span className="border-r-4 border-gray-800 animate-blink inline-block ">&nbsp;</span>
        </h1>
        <p className="mt-4 max-w-xl text-black md:text-xl drop-shadow-xl">
          I'm a passionate Full-Stack Developer with a keen eye for detail and a
          commitment to creating beautiful, performant, and user-friendly
          experiences
        </p>
        <div className="mt-8">
          <Button size="lg">View My Work</Button>
        </div>
      </div>
    </section>
  );
}
