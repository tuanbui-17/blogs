"use client";

import React from "react";
import BlogPaginationNumber from "../BlogPaginationNumber";
import { ArrowLeftIcon } from "@/components/Icon/ArrowLeft";
import { ArrowRightIcon } from "@/components/Icon/ArrowRight";

const BlogPagination = () => {
  const current = 2;
  const total = 10;

  const getVisiblePages = (total: number, current: number) => {
    const visiblePages = [];
    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        i === current ||
        i === current - 1 ||
        i === current + 1
      ) {
        visiblePages.push(i);
        continue;
      }
      if (visiblePages[visiblePages.length - 1] !== null) {
        visiblePages.push(null);
      }
    }
    return visiblePages;
  };

  return (
    <nav className="flex items-center justify-between border-t border-base-200 dark:border-base-700 mt-8">
      <div className="-mt-px flex w-0 flex-1">
        {current > 1 && (
          <div className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-base-500 hover:border-base-300 hover:text-base-700 dark:text-base-400 dark:hover:border-base-700 dark:hover:text-base-300 cursor-pointer">
            <ArrowLeftIcon
              className="mr-3 h-5 w-5 text-base-400"
              fill="currentColor"
            />
            newer
          </div>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {getVisiblePages(total, current).map((page, index) => {
          if (page === null) {
            return (
              <span
                key={index}
                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-base-500"
              >
                ...
              </span>
            );
          }

          return (
            <BlogPaginationNumber
              key={index}
              index={page}
              active={page === current}
              onClick={() => {}}
            />
          );
        })}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {current < total && (
          <div className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-base-500 hover:border-base-300 hover:text-base-700 dark:text-base-400 dark:hover:border-base-700 dark:hover:text-base-300 cursor-pointer">
            older
            <ArrowRightIcon
              className="ml-3 h-5 w-5 text-base-400"
              fill="currentColor"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default BlogPagination;
