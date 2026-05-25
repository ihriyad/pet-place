"use client";

import { useTheme } from "next-themes";
import React from "react";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <>
          <BiMoon></BiMoon>
        </>
      ) : (
        <>
          <FiSun />
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;
