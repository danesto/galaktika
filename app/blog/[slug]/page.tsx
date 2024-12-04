import { getSinglePost } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const mdxSource = await getSinglePost(slug);

  return (
    <section className={`font-[Verdana]`}>
      <h1 className="mb-10 font-bold text-3xl">{mdxSource.title}</h1>

      <article className="prose prose-slate dark:prose-invert">
        <h2 className="!text-base mb-10">{mdxSource.description}</h2>
        <hr />
        <MDXRemote source={mdxSource.content} />
      </article>
    </section>
  );
};

export default BlogPostPage;
