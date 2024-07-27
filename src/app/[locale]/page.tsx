import { HomePage } from "@/components/home-page";
import { cn } from "@/lib/utils";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations('common');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.locale}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/john.png`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/john.png`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
      <HomePage />
    </div>
  );
}
