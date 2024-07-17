import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="bg-muted py-12 md:py-20 px-6">
      <div className="container max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <Textarea
            placeholder="Message"
            className="w-full px-4 py-3 rounded-md bg-background text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
            rows={5}
          />
          <Button
            type="submit"
            className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
