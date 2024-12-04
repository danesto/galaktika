import Link from "next/link";
import { getPosts } from "@/lib/utils";

export default function Home() {
  const blogPosts = getPosts({});

  return (
    <div className="grid grid-cols-12 gap-y-6 col-span-12">
      <section className="col-span-12 text-lg">
        Hello world! Welcome to <b>galaktika!</b> My own universe consistent of
        personal projects, achivements, blog scribbles. Here I describe some of
        my previous projects Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Accusamus, assumenda!
      </section>

      <section className="col-span-12 flex flex-col gap-y-4">
        <h2 className="col-span-12 font-semibold text-lg">
          Latest blog scribbles
        </h2>

        <ul className="col-span-12 flex flex-col gap-y-3 text-lg">
          {blogPosts.map((post) => {
            return (
              <li key={post.title}>
                <Link href={post.id}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
