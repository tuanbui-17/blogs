import { GithubIcon } from "@/components/Icon/GithubIcon";
import { LinkedinIcon } from "@/components/Icon/LinkedinIcon";
import ThemeToggle from "../Theme/ThemeToggle";
import NavLinks from "../NavLinks";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Archive", path: "/archive" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  return (
    <div className="py-6 text-lg">
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full border border-base-400"
            src="/avatar.webp"
            alt="Rounded avatar"
          ></img>
          <p className="font-bold">Tuan Bui</p>
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
      <NavLinks />
    </div>
  );
};

export default Header;
