import { ArticlesList } from "@/components";
import { STATIC_METADATA } from "@/lib/metadata";
import { getPosts } from "@/lib/utils";

export const metadata = {
  ...STATIC_METADATA.blog,
};

export default function BlogPage() {
  const articles = getPosts();

  return (
    <div>
      <h2 className="font-bold text-xl">Some stuff I wrote:</h2>

      <ArticlesList
        className="col-span-12 flex flex-col gap-y-3 text-lg list-disc list-inside mt-4 pb-8"
        articles={articles}
      />
    </div>
  );
}
