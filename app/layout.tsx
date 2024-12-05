import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Navigation, ThemeSwitcher, Footer } from "@/components";

import { ThemeProvider } from "next-themes";

import { CSPostHogProvider } from "@/lib/post-hog-analytics-provider";
import { Logo } from "@/components/logo";

import { CONTACT_LINKS, NAVIGATION_ITEMS } from "@/lib/constants";
import "./globals.css";

const robotoFont = Roboto({
  weight: ["400", "100", "500", "700", "300", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devGalaktika",
  description:
    "devGalaktika is a personal portfolio website of Danilo Stojanovic where I mostly write about web development and software engineering and projects I created. It contains useful information about engineering and software development, especially frontend engineering and tech like React, Next.js, TypeScript, and more.",
  openGraph: {
    title: "devGalaktika",
    description:
      "devGalaktika is a personal portfolio website of Danilo Stojanovic where I mostly write about web development and software engineering and projects I created. It contains useful information about engineering and software development, especially frontend engineering and tech like React, Next.js, TypeScript, and more.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    images: ["/logo.png"],
    title: "devGalaktika",
    description:
      "devGalaktika is a personal portfolio website of Danilo Stojanovic where I mostly write about web development and software engineering and projects I created. It contains useful information about engineering and software development, especially frontend engineering and tech like React, Next.js, TypeScript, and more.",
    creator: "@milisavko",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoFont.variable} font-sans antialiased flex justify-center`}
      >
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          <CSPostHogProvider>
            <div className="min-h-screen w-full max-w-[860px] grid md:grid-rows-[50px_1fr_20px] grid-rows-[150px_1fr_20px] grid-cols-12 items-center justify-start md:gap-y-10 gap-y-4 px-3 py-6">
              <header className="flex md:items-center gap-10 col-span-12 md:flex-row flex-col items-start relative">
                <h1 className="font-extrabold text-xl">
                  <Logo />
                </h1>

                <Navigation items={NAVIGATION_ITEMS} />

                <div className="absolute right-0">
                  <ThemeSwitcher />
                </div>
              </header>

              <main className="col-span-12 h-full">{children}</main>

              <Footer
                className="flex items-center col-span-12 gap-1 justify-center"
                items={CONTACT_LINKS}
              />
            </div>
          </CSPostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
