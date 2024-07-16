import type { NextRequest } from "next/server";
import { i18nMiddleware } from "./server/i18n-middleware";

export const middleware = (request: NextRequest) => {
  return i18nMiddleware(request);
};

export const config = {
  matcher: ["/", `/(en|de)/:path*`],
};
