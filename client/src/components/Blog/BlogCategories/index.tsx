"use client";

import { categories } from "@/data/category.data";
import { CATEGORY } from "@/interface/category.interface";
import React from "react";

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const onChangeCategory = (slug: string) => {
    setActiveCategory(slug);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        className="rounded-xl bg-base-100 px-3 py-1.5 text-sm font-medium text-base-700 hover:bg-accent-500/10 dark:bg-base-800 dark:hover:bg-accent-500/10 hover:dark:text-accent-400 hover:text-accent-600 dark:text-base-300 border border-base-200 dark:border-base-700 hover:border-accent-600/20 dark:hover:border-accent-600/20 transition-colors duration-100"
        onClick={() => onChangeCategory("all")}
        aria-pressed={activeCategory === "all"}
      >
        All
      </button>
      {categories.map((category: CATEGORY) => {
        return (
          <button
            key={category.id}
            className="rounded-xl bg-base-100 px-3 py-1.5 text-sm font-medium text-base-700 hover:bg-accent-500/10 dark:bg-base-800 dark:hover:bg-accent-500/10 hover:dark:text-accent-400 hover:text-accent-600 dark:text-base-300 border border-base-200 dark:border-base-700 hover:border-accent-600/20 dark:hover:border-accent-600/20 transition-colors duration-100"
            onClick={() => onChangeCategory(category.slug)}
            aria-pressed={activeCategory === category.slug}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default BlogCategories;
