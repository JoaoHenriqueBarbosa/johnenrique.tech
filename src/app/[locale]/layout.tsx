import type { PropsWithChildren } from "react";

import "@/globals.css";
import { locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
