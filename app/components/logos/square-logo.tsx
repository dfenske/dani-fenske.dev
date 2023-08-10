"use client";

import { useTheme } from "@/app/theme-provider";

export default function Square() {
  const { isDarkMode } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      viewBox="0 0 44.004 44.004"
      fill={isDarkMode ? "#fff" : "#000"}
    >
      <path d="M36.65 0H7.354A7.354 7.354 0 0 0 0 7.354V36.65a7.354 7.354 0 0 0 7.354 7.354H36.65a7.353 7.353 0 0 0 7.354-7.354V7.354A7.352 7.352 0 0 0 36.65 0zm-.646 33.686a2.32 2.32 0 0 1-2.32 2.319H10.325a2.32 2.32 0 0 1-2.321-2.319v-23.36a2.32 2.32 0 0 1 2.321-2.321h23.358a2.32 2.32 0 0 1 2.32 2.321v23.36z" />
      <path d="M17.333 28.003a1.336 1.336 0 0 1-1.332-1.339V17.34c0-.739.596-1.339 1.332-1.339h9.338c.738 0 1.332.6 1.332 1.339v9.324c0 .738-.594 1.339-1.332 1.339h-9.338z" />
    </svg>
  );
}
