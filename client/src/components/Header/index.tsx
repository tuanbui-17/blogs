"use client";

import Link from "next/link";
import { GithubIcon } from "@/components/Icon/GithubIcon";
import { LinkedinIcon } from "@/components/Icon/LinkedinIcon";
import { usePathname } from "next/navigation";
import ThemeToggle from "../Theme/ThemeToggle";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Archive", path: "/archive" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (pathname.includes("/blog") && path === "/blog") {
      return true;
    }

    return pathname === path;
  };

  return (
    <div className="py-6 text-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex space-x-6">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className={`${
                isActivePath(item.path) ? "text-accent-400" : ""
              } relative hover:text-accent-400 cursor-pointer transition-colors duration-200 ease-in-out`}
            >
              <Link href={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon
              width={30}
              height={25}
              fill={"currentColor"}
              className="hover:fill-accent-400 transition-colors duration-200 ease-in-out"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GithubIcon
              width={30}
              height={25}
              fill={"currentColor"}
              className="hover:fill-accent-400 transition-colors duration-200 ease-in-out"
            />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
