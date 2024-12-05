import { ArticlesList } from "@/components";
import { STATIC_METADATA } from "@/lib/metadata";
import { getPosts } from "@/lib/utils";

export const metadata = {
  ...STATIC_METADATA.home,
};

export default function Home() {
  const articles = getPosts();

  return (
    <div className="grid grid-cols-12 gap-y-6 col-span-12">
      <section className="col-span-12 text-lg flex flex-col gap-2">
        <p>
          <strong>Hello world! </strong> Welcome to{""}
          <strong>Galaktika!</strong> My own universe consistent of personal
          projects, achivements, blog scribbles. Here I describe some of my
          previous projects, and write about things that interest me.
        </p>
        <p>
          For the Hiring Managers that might read this - I hope you find out
          something about me as a person that you wouldn&apos;t find on my
          resume or 15min screening call.
        </p>
      </section>

      <section className="col-span-12 flex flex-col gap-y-4">
        <h2 className="col-span-12 font-semibold text-lg">
          Some stuff I wrote recently:
        </h2>

        <ArticlesList
          articles={articles}
          maxCount={5}
          className="col-span-12 flex flex-col gap-y-3 text-lg pb-8"
        />
      </section>
    </div>
  );
}
