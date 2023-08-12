"use client";

import { FiBookmark, FiHome, FiInfo, FiTrendingUp } from "react-icons/fi";
import { PiGraduationCap, PiCarrot, PiChatDots } from "react-icons/pi";
import HeaderItem from "./HeaderItem";
import ThemeToggle from "../theme-toggle";

export default function Header() {
  return (
    <header className="header flex justify-between items-center text-2xl sm:text-3xl p-2">
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
          icon={<PiGraduationCap />}
        />
        <HeaderItem
          text="Blog Posts"
          href="/blog-posts"
          id="blog-posts"
          icon={<FiBookmark />}
        />
        <HeaderItem
          text="About Me"
          href="/about-me"
          id="about-me"
          icon={<PiCarrot />}
        />
        <HeaderItem
          text="Making of this site"
          href="/making-of-the-site"
          id="making"
          icon={<FiInfo />}
        />
        <HeaderItem
          text="Contact"
          href="/contact"
          id="contact"
          icon={<PiChatDots />}
        />
      </div>
      <ThemeToggle />
    </header>
  );
}
