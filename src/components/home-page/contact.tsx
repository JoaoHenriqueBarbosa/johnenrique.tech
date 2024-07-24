import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function Contact() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-muted py-12 md:py-20 px-6">
      <div className="container max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t("heading")}</h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                id="name"
                type="text"
                placeholder={t("name")}
                className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "loading"}
              />
            </div>
            <div>
              <Input
                id="email"
                type="email"
                placeholder={t("email")}
                className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
              />
            </div>
          </div>
          <div>
            <Textarea
              id="message"
              placeholder={t("message")}
              className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === "loading"}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            disabled={status === "loading"}
          >
            {status === "loading" ? t("sending") : t("submit")}
          </Button>
          {status === "success" && (
            <p className="text-green-600 text-center">{t("success")}</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">{t("error")}</p>
          )}
        </form>
      </div>
    </section>
  );
}
