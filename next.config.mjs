import nextIntlPlugin from "next-intl/plugin";

/**
 * Create config wrapper required for using next-intl with RSCs.
 * See https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
 */
const withNextIntl = nextIntlPlugin("./src/server/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({});

export default nextConfig;
