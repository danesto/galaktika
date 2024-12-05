import { ArticlesList } from "@/components";
import { getPosts } from "@/lib/utils";

const META_DESCRIPTION =
  "A Blog all things web development and software engineering. Career stuff, personal projects, interesting tech, philosphiacl musings, and more.";

export const metadata = {
  title: "devGalaktika | Blog",
  description: META_DESCRIPTION,
  openGraph: {
    title: "devGalaktika | Blog",
    description: META_DESCRIPTION,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "devGalaktika | Blog",
    description: META_DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function BlogPage() {
  const articles = getPosts();

  return (
    <div>
      <h2 className="font-bold text-xl">Some stuff I wrote:</h2>

      <ArticlesList
        className="col-span-12 flex flex-col gap-y-3 text-lg list-disc list-inside mt-4"
        articles={articles}
      />
    </div>
  );
}
