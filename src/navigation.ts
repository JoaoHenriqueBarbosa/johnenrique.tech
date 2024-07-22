import {
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

import { locales } from "./i18n";

/**
 * Configure localized pathnames (/en/about-us and /de/ueber-uns).
 * See https://next-intl-docs.vercel.app/docs/routing/navigation#localized-pathnames
 */
export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/blog": "/blog",
  "/blog/[slug]": "/blog/[slug]",
  "/projects/[slug]": "/projects/[slug]"
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
