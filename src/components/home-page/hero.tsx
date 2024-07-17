import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useWordTyper } from "@/hooks/useWordTyper";
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  const word = useWordTyper(t('typedWords').split(','));

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
          {t('heading')}<br/>{word}<span className="border-r-4 border-gray-800 animate-blink inline-block ">&nbsp;</span>
        </h1>
        <p className="mt-4 max-w-xl text-black md:text-xl drop-shadow-xl">
          {t('description')}
        </p>
        <div className="mt-8">
          <Button size="lg">{t('cta')}</Button>
        </div>
      </div>
    </section>
  );
}
