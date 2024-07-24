import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-muted py-12 md:py-20 px-6">
      <div className="container max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t("heading")}</h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder={t("name")}
              className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <Input
              type="email"
              placeholder={t("email")}
              className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <Textarea
            placeholder={t("message")}
            className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
            rows={5}
          />
          <Button
            type="submit"
            className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {t("submit")}
          </Button>
        </form>
      </div>
    </section>
  );
}
