import fs from "node:fs";
import path from "path";
import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";

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

export { getPosts };
