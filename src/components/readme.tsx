"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Remark } from "react-remark";
import remarkExternalLinks from "remark-external-links";

export function Readme({ url }: { url: string }) {
  const t = useTranslations("projectPage");
  const [readmeContent, setReadmeContent] = useState<string | null>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setReadmeContent);
  }, [url]);

  return (
    <div className="remark">
      {readmeContent ? (
        <Remark
          // @ts-ignore
          remarkPlugins={[remarkExternalLinks]}
          rehypeReactOptions={{
            components: {
              h2: (props: any) => (
                <h2
                  id={props.children[0].replace(/\s/g, "-").toLowerCase()}
                  {...props}
                >
                  {props.children}
                </h2>
              ),
            },
          }}
        >
          {readmeContent}
        </Remark>
      ) : (
        <p>{t("readmeplaceholder")}</p>
      )}
    </div>
  );
}
