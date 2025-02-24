"use client";

import { categories } from "@/data/category.data";
import { CATEGORY } from "@/interface/category.interface";
import React from "react";

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("#all");

  const onChangeCategory = (slug: string) => {
    setActiveCategory(slug);
  };

  return (
    <div className="flex flex-wrap gap-4 text-md font-medium">
      <button
        className="hover:text-accent-400 duration-200 text-accent-400"
        onClick={() => onChangeCategory("#all")}
        aria-pressed={activeCategory === "#all"}
      >
        #all
      </button>
      {categories.map((category: CATEGORY) => {
        return (
          <button
            key={category.id}
            className="hover:text-accent-400 duration-200"
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
