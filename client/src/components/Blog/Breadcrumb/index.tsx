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
                    className="flex items-center text-sm capitalize text-gray-500 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none dark:text-neutral-500 dark:hover:text-yellow-500 dark:focus:text-yellow-500"
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
