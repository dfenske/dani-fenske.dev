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
      <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
        <span className="mr-[-1.15rem] text-sm font-medium text-amber-600 dark:text-green-600 z-50">
          <FiSun />
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            className="sr-only peer"
            onChange={toggleTheme}
          />
          <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-100 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-green-600" />
          <span className="ml-[-1.15rem] text-sm font-medium text-slate-300 dark:text-blue-900 z-50">
            <FiMoon />
          </span>
        </label>
      </div>
    </header>
  );
}
