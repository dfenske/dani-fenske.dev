"use client";

import { useTheme } from "../../theme-provider";
import {
  FiAward,
  FiBookOpen,
  FiEdit,
  FiHome,
  FiMail,
  FiMoon,
  FiSun,
  FiTrendingUp,
} from "react-icons/fi";
import HeaderItem from "./HeaderItem";

export default function Header() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <header className="header flex justify-between items-center text-3xl p-2">
      <div className="flex">
        <HeaderItem text="Home" href="/" id="home" icon={<FiHome />} />
        <HeaderItem
          text="Work History"
          href="/work-history"
          id="work-history"
          icon={<FiTrendingUp />}
        />
        <HeaderItem
          text="Education"
          href="/education"
          id="education"
          icon={<FiAward />}
        />
        <HeaderItem
          text="Blog Posts"
          href="/blog-posts"
          id="blog-posts"
          icon={<FiEdit />}
        />
        <HeaderItem
          text="About Me"
          href="/about-me"
          id="about-me"
          icon={<FiBookOpen />}
        />
        <HeaderItem
          text="Contact"
          href="/contact"
          id="contact"
          icon={<FiMail />}
        />
      </div>
      <div className="flex items-center">
        <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">
          <FiSun />
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            className="sr-only peer"
            onChange={toggleTheme}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <FiMoon />
          </span>
        </label>
      </div>
    </header>
  );
}
