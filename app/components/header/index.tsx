import {
  FiAward,
  FiBookOpen,
  FiEdit,
  FiHome,
  FiMail,
  FiTrendingUp,
} from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-3xl p-2">
      <div className="flex">
        <a href="/" className="mx-2">
          <FiHome />
        </a>
        <a href="/work-history" className="mx-2">
          <FiTrendingUp />
        </a>
        <a href="/education" className="mx-2">
          <FiAward />
        </a>
        <a href="/blog-posts" className="mx-2">
          <FiEdit />
        </a>
        <a href="/about-me" className="mx-2">
          <FiBookOpen />
        </a>
        <a href="/contact" className="mx-2">
          <FiMail />
        </a>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Dark Mode
        </span>
      </label>
    </header>
  );
}