import BlogCategories from "@/components/Blog/BlogCategories";
import BlogPagination from "@/components/Blog/BlogPagination";
import BlogPosts from "@/components/Blog/BlogPosts";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl font-medium">Blog Posts</p>
      <BlogCategories />
      <BlogPosts />
      <BlogPagination />
    </div>
  );
};

export default Page;
