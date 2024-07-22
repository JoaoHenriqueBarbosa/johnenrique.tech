"use client";

import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon } from "@radix-ui/react-icons";
import { useParams } from "next/navigation";
import { omit } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const switchLocale = (newLocale: string) => {
    // @ts-ignore
    router.push({
      pathname,
      params: omit(params, "locale")
    }, { locale: newLocale, });
  };

  return (
    <div className="flex space-x-2">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="hover:bg-primary/20 px-2 py-2 rounded">
          <GlobeIcon className="h-5 w-5 text-white drop-shadow" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => switchLocale("en")}
              isActive={locale === "en"}
            >
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => switchLocale("pt-BR")}
              isActive={locale === "pt-BR"}
            >
              Português (Brasil)
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
