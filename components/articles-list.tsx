import { Article } from "@/lib/types";
import Link from "next/link";

type ArticlesListProps = {
  maxCount?: number;
  className?: string;
  articles: Pick<Article, "id" | "title">[];
};

const ArticlesList = ({
  maxCount,
  className,
  articles = [],
}: ArticlesListProps) => {
  const posts = maxCount ? articles.slice(0, maxCount) : articles;

  return (
    <ul className={className}>
      {posts.map((post) => {
        return (
          <li key={post.title}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export { ArticlesList };
