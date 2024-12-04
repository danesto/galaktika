import ProjectsMdx from "./_projects.mdx";

const META_DESCRIPTION =
  "Projects I created, worked on, or contributed to. A collection of personal projects, open-source contributions, and other work I did.";

export const metadata = {
  title: "devGalaktika | Blog",
  description: META_DESCRIPTION,
  openGraph: {
    title: "devGalaktika | Blog",
    description: META_DESCRIPTION,
    images: ["/logo.png"],
  },
  twitter: {
    card: "app",
    title: "devGalaktika | Blog",
    description: META_DESCRIPTION,
    images: ["/logo.png"],
  },
};

function ProjectsPage() {
  return (
    <section className="prose dark:prose-invert md:prose-base prose-sm">
      <ProjectsMdx />
    </section>
  );
}

export default ProjectsPage;
