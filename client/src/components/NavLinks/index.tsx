"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavLinks = () => {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (pathname.includes("/blog") && path === "/blog") {
      return true;
    }

    return pathname === path;
  };

  return (
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
  );
};

export default NavLinks;
