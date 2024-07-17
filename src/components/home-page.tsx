"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const useWordTyper = (words: string[]) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const isWordComplete = displayedText === currentWord;

      if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          setDisplayedText((prevText) => prevText.slice(0, -1));
        }
      } else {
        if (isWordComplete) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }
      }

      setTypingSpeed(isDeleting ? 100 : 200); // Faster deleting speed
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, words, currentWordIndex]);

  return displayedText;
};

export function HomePage() {
  const [scroll, setScroll] = useState(false);
  const word = useWordTyper(["Complex Systems", "Web Apps", "Designs", "Middlewares", "AI Tools"]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
  });

  return (
    <div className="flex flex-col min-h-dvh relative">
      <header
        className={cn(
          "w-full fixed px-4 top-0 z-30 header",
          scroll ? "glassmorphic-dark" : "glassmorphic"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/john.jpg" />
              <AvatarFallback>JE</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-xl">
                John Enrique
              </h1>
              <p className="text-sm text-white drop-shadow-xl">
                Full-Stack Developer
              </p>
            </div>
          </div>
          <nav className="hidden space-x-6 md:flex items-center">
            <Link
              href="#"
              className="text-md font-medium text-primary-foreground hover:underline drop-shadow-xl"
              prefetch={false}
            >
              Work
            </Link>
            <Link
              href="#"
              className="text-md font-medium text-primary-foreground hover:underline drop-shadow-xl"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-md font-medium text-primary-foreground hover:underline drop-shadow-xl"
              prefetch={false}
            >
              Contact
            </Link>
            <Button size="lg" className="hidden md:inline-flex text-md">
              Hire Me
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-lg font-medium text-foreground hover:underline"
                  prefetch={false}
                >
                  Work
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium text-foreground hover:underline"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium text-foreground hover:underline"
                  prefetch={false}
                >
                  Contact
                </Link>
                <Button size="sm">Hire Me</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full">
          <Image
            src="/holo.webp"
            alt="Hero Image"
            width={1120}
            height={630}
            quality={100}
            className="h-[60vh] w-full object-cover object-center md:h-[80vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t to-60% from-muted/100 to-muted/0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl drop-shadow-xl">
              Crafting Exceptional<br/>{word}<span className="border-r-4 border-gray-800 animate-blink inline-block ">&nbsp;</span>
            </h1>
            <p className="mt-4 max-w-xl text-black md:text-xl drop-shadow-xl">
              I'm a passionate Full-Stack Developer with a keen eye for detail and a
              commitment to creating beautiful, performant, and user-friendly
              experiences
            </p>
            <div className="mt-8">
              <Button size="lg">View My Work</Button>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="bg-muted pb-12 md:pb-20 px-6 mt-[-60px]"
        >
          <div className="container max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4 relative z-20">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Check out some of my recent web development projects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Project 1"
                    width={640}
                    height={360}
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A modern e-commerce website built with React, Next.js, and
                    Tailwind CSS.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Project 2"
                    width={640}
                    height={360}
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">
                    A responsive blog website built with Next.js and Tailwind
                    CSS.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Project 3"
                    width={640}
                    height={360}
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Project 4"
                    width={640}
                    height={360}
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project 4</h3>
                  <p className="text-muted-foreground">
                    A real-time chat application built with React, Socket.IO,
                    and Tailwind CSS.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="bg-background py-12 md:py-20 px-6">
          <div className="container max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
              <p className="text-muted-foreground">
                Here are some of the technologies I'm proficient in.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">React</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">Next.js</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <WindIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">Node.js</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">MongoDB</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">PostgreSQL</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitGraphIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">Git</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DockIcon className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground">Docker</p>
              </div>
            </div>
          </div>
        </section>
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
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CodepenIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function DockIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  );
}

function GitGraphIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function WindIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
