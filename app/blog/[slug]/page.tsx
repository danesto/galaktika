import { getPosts, getSinglePost } from "@/lib/utils";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Since our blog posts are read from the file system, we can generate the static paths for them at build time.
export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

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

      <article className="prose prose-slate prose-base md:prose-base dark:prose-invert">
        <h2 className="md:!text-base !text-base mb-10 italic !font-normal">
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
