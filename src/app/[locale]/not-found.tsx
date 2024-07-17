import { getTranslations } from "next-intl/server";
import { useLocale } from "next-intl";
import type { FC } from "react";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type NotFoundProps = {
  locale: string;
};

export const NotFound: FC<NotFoundProps> = async ({ locale }) => {
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <>
      <head>
        <title>{t("meta.title")}</title>
      </head>
      <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased grid place-content-center",
        fontSans.variable
      )}
    >
        <h1 className="text-2xl">{t("heading")}</h1>
      </body>
    </>
  );
};

const NotFoundPage: FC = () => {
  const locale = useLocale();

  return <NotFound locale={locale} />;
};

export default NotFoundPage;
