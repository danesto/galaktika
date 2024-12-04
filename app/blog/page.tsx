import { getPosts } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";

export default function BlogPage() {
  const blogPosts = useMemo(() => {
    return getPosts({});
  }, []);

  return (
    <div>
      <h2 className="font-bold text-xl">Blog Scribbles</h2>
      <ul className="col-span-12 flex flex-col gap-y-3 text-lg list-disc list-inside">
        {blogPosts.map((post) => {
          return (
            <li key={post.title}>
              <Link href={post.id}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
