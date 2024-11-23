import { useState, useEffect } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import Navbar from "./client/common/Navbar";
import ProfileHeader from "./client/components/ProfileHeader";
export default function LayoutClient() {
  const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || systemPrefersDark
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }, [isDarkMode]);
  console.log(isDarkMode);

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ProfileHeader isDarkMode={isDarkMode} />
    </div>
  );
}
