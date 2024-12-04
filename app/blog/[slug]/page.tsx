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
      <h1 className="mb-10 font-bold md:text-3xl text-xl">{mdxSource.title}</h1>

      <article className="prose prose-slate prose-sm md:prose-base dark:prose-invert">
        <h2 className="md:!text-base !text-sm mb-10 italic !font-normal">
          {mdxSource.description}
        </h2>
        <hr />
        <MDXRemote
          options={{}}
          source={mdxSource.content}
          components={{
            mark: (props) => (
              <mark {...props} className="!bg-red-100">
                {props.children}
              </mark>
            ),
          }}
        />
      </article>
    </section>
  );
};

export default BlogPostPage;
