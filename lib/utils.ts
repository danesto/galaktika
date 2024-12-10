import fs from "node:fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

/**
 *
 * @param blogDirectory - The directory where the blog posts are stored. Use: `path.join(process.cwd(), articles_folder)` syntax to get the correct path
 * defaults to: `path.join(process.cwd(), articles)`
 * @returns An array of blog posts with the following properties: `id, title, createdAt, description`.
 * @NOTES
 * You could optinally change return statement of the function to return more properties depending on what metadata you have in your markdown files.
 * **Post id returned is the filename without the `.mdx` extension**
 */
const getPosts = (blogDirectory = path.join(process.cwd(), `articles`)) => {
  const fileNames = fs.readdirSync(blogDirectory);

  const allBlogPosts = fileNames.map((post) => {
    const id = post.replace(/\.mdx$/, "");

    const fullPath = path.join(blogDirectory, post);

    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      createdAt: matterResult.data.createdAt,
      description: matterResult.data.description,
    };
  });

  const sortedPosts = allBlogPosts.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  return sortedPosts;
};

/**
 *
 * @param postId - The id of the blog post
 * @returns The blog post with the following properties: `title, date, category, description, content, previewImage`
 */
const getSinglePost = (postId: string) => {
  const blogPost = path.join(process.cwd(), `articles/${postId}.mdx`);

  const fileContents = fs.readFileSync(blogPost, "utf-8");

  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    date: matterResult.data.createdAt,
    description: matterResult.data.description,
    content: matterResult.content,
  };
};

/**
 * Use this function if MDXRemote is rendered on the client side as it needs to be serialized first
 */
const getMdxPageContentCSR = async (postUrl: string) => {
  const blogPost = path.join(process.cwd(), `articles/${postUrl}.mdx`);

  const fileContents = fs.readFileSync(blogPost, "utf-8");

  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content);

  return mdxSource;
};

export { getPosts, getSinglePost, getMdxPageContentCSR };
