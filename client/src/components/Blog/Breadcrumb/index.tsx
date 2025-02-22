"use client";

import { ChevronRightIcon } from "@/components/Icon/ChevronRightIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathNames = usePathname()
    .split("/")
    .filter((path) => path);

  return (
    <div className="my-4">
      <ol className="flex items-center overflow-hidden">
        {pathNames.map((value, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          return (
            <li key={href} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={href}
                    className="flex items-center text-sm capitalize text-gray-400 hover:text-accent-400 focus:text-accent-400 focus:outline-none dark:text-neutral-400 dark:hover:text-accent-400 dark:focus:text-accent-400"
                  >
                    {value}
                  </Link>
                  <ChevronRightIcon className="dark:text-white" fill="none" />
                </>
              ) : (
                <span
                  className="inline-flex items-center truncate text-sm font-semibold text-gray-800 dark:text-neutral-200"
                  aria-current="page"
                >
                  {value}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
