"use client";

import { useTheme } from "@/app/theme-provider";
import { FiEye, FiEyeOff, FiMoon, FiSun } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

export default function ThemeToggle() {
  const { toggleTheme, isDarkMode, toggleUseOSPref, usingOSPref } = useTheme();
  return (
    <div className="flex items-center">
      <Tooltip id="use-os" className="tooltip hidden sm:block mt-1" />
      <button
        aria-label="Use OS setting"
        data-tooltip-id="use-os"
        data-tooltip-content="Use OS setting"
        data-tooltip-place="top"
        className={`text-sm mr-5 cursor-pointer px-3 py-2 ${
          usingOSPref
            ? "outline outline-2 outline-blue-500 dark:bg-slate-900 bg-blue-50 rounded"
            : "outline outline-[1px] outline-blue-200 rounded"
        }`}
        onClick={toggleUseOSPref}
      >
        {usingOSPref ? <FiEye /> : <FiEyeOff />}
      </button>
      <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
        <span className="mr-[-1.15rem] text-sm font-medium text-amber-600 dark:text-blue-600 z-50">
          <FiSun />
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            className="sr-only peer"
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <div className="w-11 h-6 bg-amber-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-100 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
          <span className="ml-[-1.15rem] text-sm font-medium text-amber-300 dark:text-blue-900 z-50">
            <FiMoon />
          </span>
        </label>
      </div>
    </div>
  );
}
