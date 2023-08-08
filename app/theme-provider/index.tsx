"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { karla, bungee } from "@/styles/fonts";
import clsx from "clsx";

interface Theme {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

// Create a context to store the theme state
const ThemeContext = createContext<Theme | undefined>(undefined);

// Define a custom hook to access the theme context
export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

// ThemeProvider component to wrap the entire app and provide the theme state
export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to track whether the theme has been initialized
  const [themeInitialized, setThemeInitialized] = useState(false);

  useEffect(() => {
    // Use the user's OS theme preference if they haven't explicitly set a preference
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("theme") === null
    ) {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else if (localStorage.getItem("theme") !== null) {
      // Use the user's preference from localStorage if they have chosen a preference
      const savedTheme = localStorage.getItem("theme");
      setIsDarkMode(savedTheme === "dark");
    }
    // Mark the theme as initialized after applying the correct theme
    setThemeInitialized(true);
  }, []);

  // Set the class on the html element to apply the theme styles
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle the theme between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Define the theme object with the required colors for dark and light modes
  const theme: Theme = {
    toggleTheme,
    isDarkMode,
  };

  return (
    <html lang="en" className={`${bungee.variable} ${karla.variable}`}>
      <body
        className={clsx(
          "flex flex-col min-h-screen dark:bg-black dark:text-white",
          {
            ["hidden"]: !themeInitialized,
          }
        )}
      >
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </body>
    </html>
  );
};
