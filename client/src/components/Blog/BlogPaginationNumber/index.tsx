"use client";

import React from "react";

interface Props {
  index: number;
  active: boolean;
  onClick: () => void;
}
const BlogPaginationNumber = ({ index, active, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
    inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium
    ${
      active
        ? "text-accent-400 border-accent-400"
        : "border-transparent text-base-500 hover:border-base-300 hover:text-base-700 dark:text-base-400 dark:hover:border-base-700 dark:hover:text-base-300"
    }
    `}
    >
      {index}
    </button>
  );
};

export default BlogPaginationNumber;
