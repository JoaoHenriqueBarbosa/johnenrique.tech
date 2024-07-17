"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export function Header() {
  const [scroll, setScroll] = useState(false);
  const t = useTranslations('header');

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
  }, []);

  return (
    <header
      className={cn(
        "w-full fixed px-4 top-0 z-30 header",
        scroll ? "header-glass-dark" : "header-glass"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/john.jpg" />
            <AvatarFallback>{t("initials")}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-white drop-shadow-xl">
              {t('name')}
            </h1>
            <p className="text-sm text-white drop-shadow-xl">
              {t('role')}
            </p>
          </div>
        </div>
        <nav className="hidden space-x-6 md:flex items-center">
          <Link
            href="#"
            className="text-md font-medium text-primary-foreground hover:underline drop-shadow-xl"
            prefetch={false}
          >
            {t('nav.work')}
          </Link>
          <Link
            href="#"
            className="text-md font-medium text-primary-foreground hover:underline drop-shadow-xl"
            prefetch={false}
          >
            {t('nav.about')}
          </Link>
          <Link
            href="#"
            className="text-md font-medium text-primary-foreground hover:underline drop-shadow-xl"
            prefetch={false}
          >
            {t('nav.contact')}
          </Link>
          <Button size="lg" className="hidden md:inline-flex text-md">
            {t('cta')}
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="text-lg font-medium text-foreground hover:underline"
                prefetch={false}
              >
                {t('nav.work')}
              </Link>
              <Link
                href="#"
                className="text-lg font-medium text-foreground hover:underline"
                prefetch={false}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="#"
                className="text-lg font-medium text-foreground hover:underline"
                prefetch={false}
              >
                {t('nav.contact')}
              </Link>
              <Button size="sm">{t('cta')}</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
