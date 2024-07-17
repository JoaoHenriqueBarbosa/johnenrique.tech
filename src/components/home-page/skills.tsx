import Image from "next/image";
import { Button } from "../ui/button";

export function Skills() {
  return (
    <section id="skills" className="relative w-full">
      <Image
        src="/holo-2.webp"
        alt="Hero Image"
        width={1120}
        height={630}
        quality={100}
        className="h-[40vh] w-full object-cover object-center md:h-[60vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-muted/100 via-transparent to-muted/100" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 container max-w-5xl mx-auto space-y-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                My Skills
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-white rounded-lg glassmorphic p-4 shadow-xl">
                  <CodepenIcon className="h-8 w-8" />
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Figma
                  </h3>
                </div>
                <div className="text-white rounded-lg glassmorphic p-4 shadow-xl">
                  <DatabaseIcon className="h-8 w-8" />
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Photoshop
                  </h3>
                </div>
                <div className="text-white rounded-lg glassmorphic p-4 shadow-xl">
                  <DockIcon className="h-8 w-8" />
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Illustrator
                  </h3>
                </div>
                <div className="text-white rounded-lg glassmorphic p-4 shadow-xl">
                  <GitGraphIcon className="h-8 w-8" />
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Adobe XD
                  </h3>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

function SkillIcon({
  icon: Icon,
  name,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="w-12 h-12 text-primary" />
      <p className="text-muted-foreground">{name}</p>
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
