import { getSinglePost } from "@/lib/utils";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { title, description } = await getSinglePost(slug);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary",
      title: title,
      description: description,
      images: ["/logo.png"],
    },
  };
}

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const mdxSource = await getSinglePost(slug);

  return (
    <section className={`font-[Verdana] grid`}>
      <span className="self-end mb-4">{mdxSource.date}</span>
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
