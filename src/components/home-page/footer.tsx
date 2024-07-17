import Link from "next/link";

export function Footer() {
  return (
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
  );
}
