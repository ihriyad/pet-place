"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import React from "react";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="outline" className=" rounded-full p-3" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <>
          <BiMoon></BiMoon>
        </>
      ) : (
        <>
          <FiSun />
        </>
      )}
    </Button>
  );
};

export default ThemeSwitcher;
