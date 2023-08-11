"use client";

import {
  FiAward,
  FiBookOpen,
  FiEdit,
  FiHome,
  FiMail,
  FiTrendingUp,
} from "react-icons/fi";
import HeaderItem from "./HeaderItem";
import ThemeToggle from "../theme-toggle";

export default function Header() {
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
      <ThemeToggle />
    </header>
  );
}
