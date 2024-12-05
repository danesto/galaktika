import { Metadata } from "next";
import ProjectsMdx from "./_projects.mdx";
import { STATIC_METADATA } from "@/lib/metadata";

export const metadata: Metadata = {
  ...STATIC_METADATA.projects,
};

function ProjectsPage() {
  return (
    <section className="prose dark:prose-invert md:prose-base prose-sm">
      <ProjectsMdx />
    </section>
  );
}

export default ProjectsPage;
