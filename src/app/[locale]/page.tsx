import { HomePage } from "@/components/home-page";
import { cn } from "@/lib/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <head>
        <title>Page</title>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <HomePage />
      </body>
    </>
  );
}
