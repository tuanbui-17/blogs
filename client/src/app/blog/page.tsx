import BlogCategories from "@/components/Blog/BlogCategories";
import BlogPosts from "@/components/Blog/BlogPosts";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl font-medium">Blog Posts</p>
      <BlogCategories />
      <BlogPosts />
    </div>
  );
};

export default Page;
