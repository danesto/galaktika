import fs from "node:fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const getPosts = ({ blogDirectory = path.join(process.cwd(), `articles`) }) => {
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

  return allBlogPosts;
};

const getSinglePost = (postId: string) => {
  const blogPost = path.join(process.cwd(), `articles/${postId}.mdx`);

  const fileContents = fs.readFileSync(blogPost, "utf-8");

  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    date: matterResult.data.createdAt,
    category: matterResult.data.category,
    description: matterResult.data.description,
    content: matterResult.content,
    slug: postId,
    previewImage: matterResult.data.previewImage,
  };
};

// Used if MDXRemote is rendered on the client side as it needs to be serialized first
const getMdxPageContentCSR = async (postUrl: string) => {
  const blogPost = path.join(process.cwd(), `articles/${postUrl}.mdx`);

  const fileContents = fs.readFileSync(blogPost, "utf-8");

  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content);

  return mdxSource;
};

export { getPosts, getSinglePost, getMdxPageContentCSR };
