"use client";

import React from "react";
import { formatTimestamp } from "@/utils/date";
import { BlogPostsData } from "@/data/blog.data";
import { BLOG } from "@/interface/blog.interface";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <div className="flex flex-col gap-3">
      {BlogPostsData.map((post: BLOG) => {
        return (
          <Link
            href={`/blog/${post.slug}`}
            className="grid grid-cols-4 hover:text-accent-400 cursor-pointer transition-colors duration-200 ease-in-out"
            key={post.id}
          >
            <p className="col-span-3 font-medium text-lg">{post.title}</p>
            <p className="text-base-400 text-sm text-right">
              {formatTimestamp(post.updatedAt)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPosts;
