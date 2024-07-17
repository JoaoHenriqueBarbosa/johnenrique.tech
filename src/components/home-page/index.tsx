"use client";

import { Header } from "./header";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Contact } from "./contact";
import { Footer } from "./footer";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh relative">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
