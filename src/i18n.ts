export const locales = ["en", "pt-BR"] as const;
export const defaultLocale = "en";

const localePathPattern = /^\/([^\/\s]+)/;

export const getLocale = (pathname: string) =>
  localePathPattern.exec(pathname)?.[1];

export const isValidLocale = (
  locale: string,
): locale is (typeof locales)[number] =>
  locales.includes(locale as (typeof locales)[number]);

export const getTimeZone = (_locale: string) => "America/Sao_Paulo";
