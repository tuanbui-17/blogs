import Image from "next/image";
import React from "react";
import { BlogPostsData } from "@/data/blog.data";
import { formatTimestamp } from "@/utils/date";
import { BLOG } from "@/interface/blog.interface";
import BlockRenderer from "@/components/Block/BlockRenderer";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import TableOfContents from "@/components/Blog/TableOfContents";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const blog: BLOG = BlogPostsData.find((post) => post.slug === slug) as BLOG;

  let markdown = "";
  blog.blocks.forEach((block) => {
    if (block.__component === "shared.rich-text") {
      markdown += block.body;
    }
  });

  return (
    <div>
      <TableOfContents markdown={markdown} />
      <Breadcrumb />
      <Image
        src="/blog-placeholder-1.jpg"
        alt="404"
        width={400}
        height={400}
        className="w-full h-80 object-cover rounded-xl shadow border border-base-400 dark:border-base-700"
      />
      <div className="flex mt-8 items-center gap-x-4 text-xs">
        <p className="text-base-400 text-sm text-right">
          {formatTimestamp(blog.updatedAt)}
        </p>
        <button className="rounded-xl bg-base-100 px-3 py-1.5 text-sm font-medium text-base-700 hover:bg-accent-500/10 dark:bg-base-800 dark:hover:bg-accent-500/10 hover:dark:text-accent-400 hover:text-accent-600 dark:text-base-300 border border-base-200 dark:border-base-700 hover:border-accent-600/20 dark:hover:border-accent-600/20 transition-colors duration-100">
          {blog.category.name}
        </button>
      </div>
      <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
      <p className="text-base-400 mt-4">{blog.description}</p>
      <BlockRenderer blocks={blog.blocks} />
    </div>
  );
};

export default Page;
