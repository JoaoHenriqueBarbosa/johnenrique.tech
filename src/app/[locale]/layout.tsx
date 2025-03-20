import type { PropsWithChildren } from "react";
import "@/globals.css";
import { locales } from "@/i18n";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import JEAnalytics from "@/components/analytics";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/icons/16.ico" />
        <link
          rel="icon"
          href="/icons/16.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/icons/32.ico"
          type="image/x-icon"
          sizes="32x32"
        />
        <link rel="icon" href="/icons/48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icons/57.png" type="image/png" sizes="57x57" />
        <link rel="icon" href="/icons/96.png" type="image/png" sizes="96x96" />
        <link
          rel="apple-touch-icon"
          href="/icons/180.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/icons/192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/icons/512.png"
          type="image/png"
          sizes="512x512"
        />
        <JEAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body
          className={cn(
            "min-h-screen font-sans antialiased bg-muted",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
