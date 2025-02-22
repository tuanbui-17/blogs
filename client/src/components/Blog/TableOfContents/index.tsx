"use client";

import { extractTableOfContents } from "@/utils/utils";
import React, { useEffect, useState } from "react";

const TableOfContents = ({ markdown }: { markdown: string }) => {
  const tableOfContents = extractTableOfContents(markdown);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 128) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-72 bg-base-100 dark:bg-base-800 p-4 rounded-xl shadow border border-base-400 dark:border-base-700 ${
        isSticky ? "fixed top-0 right-32" : "absolute top-32 right-32"
      }`}
    >
      <p className="text-md font-bold mb-2">Table Of Contents</p>
      <ol>
        {tableOfContents.map((item) => {
          return (
            <li
              key={item.id}
              className={`ml-${((item.level ?? 0) - 2) * 2} mb-1 text-md`}
            >
              <a
                href={item.anchor}
                className="hover:text-accent-400 cursor-pointer transition-colors duration-200 ease-in-out"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TableOfContents;
