import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

import ThemeSwitcher from "@/components/theme-switcher";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const robotoFont = Roboto({
  weight: ["400", "100", "500", "700", "300"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "galaktikadev",
  description:
    "Galaktikadev is a perosnal portfolio website of Danilo Stojanovic where I mostly write about web development and software engineering and projects I created. It contains useful information about engineering and software development, especially frontend engineering and tech like React, Next.js, TypeScript, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoFont.variable} font-sans antialiased
         flex justify-center
        `}
      >
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          <div className="min-h-screen w-full max-w-[860px] grid grid-rows-[50px_1fr_20px] grid-cols-12 items-center justify-start gap-y-10 px-3 py-6">
            <header className="flex items-center gap-10 col-span-12">
              <h1 className="font-extrabold text-xl">
                <Link href="/" className="text-foreground">
                  galaktikadev
                </Link>
              </h1>
              <Navigation
                items={[
                  {
                    label: "Home",
                    href: "/",
                  },
                  {
                    label: "Projects",
                    href: "/projects",
                  },
                  {
                    label: "Blogging and Stuff",
                    href: "/blog",
                  },
                ]}
              />
              <ThemeSwitcher />
            </header>
            <main className="col-span-12 h-full">{children}</main>
            <footer className="flex items-center col-span-12 gap-1 justify-center">
              <Link href="mailto:dane.sto@gmail.com">Email</Link>
              <DividerHorizontalIcon />
              <Link
                href="https://www.linkedin.com/in/danilo-stojanovic-61143a32"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </Link>
              <DividerHorizontalIcon />
              <Link
                href="https://github.com/danesto/"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </Link>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
