import type { FC, PropsWithChildren } from "react";

import "@/globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
