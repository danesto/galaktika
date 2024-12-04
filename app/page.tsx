import Link from "next/link";
import { getPosts } from "@/lib/utils";

const META_TITLE = "devGalaktika";
const META_DESCRIPTION =
  "devGalaktika is a perosnal portfolio website of Danilo Stojanovic where I mostly write about web development and software engineering and projects I created. It contains useful information about engineering and software development, especially frontend engineering and tech like React, Next.js, TypeScript, and more.";

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function Home() {
  const blogPosts = getPosts({});

  return (
    <div className="grid grid-cols-12 gap-y-6 col-span-12">
      <section className="col-span-12 text-lg flex flex-col gap-2">
        <p>
          <strong>Hello world! </strong> Welcome to{" "}
          <strong>devGalaktika!</strong> My own universe consistent of personal
          projects, achivements, blog scribbles. Here I describe some of my
          previous projects, and write about things that interest me.
        </p>
        <p>
          For the Hiring Managers that might read this - I hope you find out
          something about me as a person that you wouldn&apos;t find on my
          resume or 15min screening call.
        </p>
      </section>

      <section className="col-span-12 flex flex-col gap-y-4">
        <h2 className="col-span-12 font-semibold text-lg">
          Some stuff I wrote recently:
        </h2>

        <ul className="col-span-12 flex flex-col gap-y-3 text-lg">
          {blogPosts.map((post) => {
            return (
              <li key={post.title}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
