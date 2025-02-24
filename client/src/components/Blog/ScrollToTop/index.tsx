"use client";

import { ArrowUp } from "@/components/Icon/ArrowUp";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-base-300 dark:bg-base-700 text-base-500 dark:text-base-200 p-2 rounded-md shadow-md hover:shadow-lg transition duration-200"
        title="Go to top"
      >
        <ArrowUp fill="currentColor" />
      </button>
    )
  );
};

export default ScrollToTop;
