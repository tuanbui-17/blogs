import React from "react";
import { formatTimestamp } from "@/utils/date";
import { BlogPostsData } from "@/data/blog.data";
import { BLOG } from "@/interface/blog.interface";

const BlogPosts = () => {
  return (
    <div className="flex flex-col gap-2">
      {BlogPostsData.map((post: BLOG) => {
        return (
          <div
            className="grid grid-cols-4 hover:text-accent-400 cursor-pointer transition-colors duration-200 ease-in-out"
            key={post.id}
          >
            <p className="col-span-3 font-medium text-lg">{post.title}</p>
            <p className="text-base-400 text-sm text-right">
              {formatTimestamp(post.updatedAt)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
