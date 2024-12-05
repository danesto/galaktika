import { Metadata } from "next";

const BLOG_DESCRIPTION = `Galaktika is a next.js boilerplate for creating a simple and minimalistic portfolio/blog 
with focus on performance and experience over design and features. 
It is a great starting point for developers who want to create a personal portfolio or 
blog with a focus on content. It uses MDX for content and TailwindCSS for styling and is optimized for performance and SEO.
.`;

const BLOG_TITLE = "devGalaktika | Blog";

const PROJECTS_DESCRIPTION = `Projects you created, worked on, or contributed to. A collection of personal projects,
open-source contributions, and other work you did`;

const PROJECTS_TITLE = "devGalaktika | Projects";

const HOME_TITLE = "devGalaktika";

const HOME_DESCRIPTION = `Galaktika is a next.js boilerplate for creating a simple and minimalistic portfolio/blog 
with focus on performance and experience over design and features. 
It is a great starting point for developers who want to create a personal portfolio or 
blog with a focus on content. It uses MDX for content and TailwindCSS for styling and is optimized for performance and SEO.
.`;

type Page = "blog" | "projects" | "home";

const STATIC_METADATA: Record<Page, Metadata> = {
  blog: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,

    openGraph: {
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      images: ["/logo.png"],
      siteName: "devGalaktika",
      url: "https://devgalaktika.vercel.app/blog",
    },

    twitter: {
      card: "summary",
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      images: ["/logo.png"],
      site: "@galaktita",
    },
  },
  projects: {
    title: PROJECTS_TITLE,
    description: PROJECTS_DESCRIPTION,

    openGraph: {
      title: PROJECTS_TITLE,
      description: PROJECTS_DESCRIPTION,
      images: ["/logo.png"],
      siteName: "devGalaktika",
      url: "https://devgalaktika.vercel.app/projects",
    },

    twitter: {
      card: "summary",
      title: PROJECTS_TITLE,
      description: PROJECTS_DESCRIPTION,
      images: ["/logo.png"],
      site: "@galaktita",
    },
  },
  home: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    openGraph: {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary",
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      images: ["/logo.png"],
    },
  },
};

export { STATIC_METADATA };
