"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

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

  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Load the saved theme preference from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  // Set the class on the html element to apply the theme styles
  useEffect(() => {
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

  // Save the theme preference to localStorage on theme change
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Define the theme object with the required colors for dark and light modes
  const theme: Theme = {
    toggleTheme,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
