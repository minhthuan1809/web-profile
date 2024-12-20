import { useState, useEffect } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import Navbar from "./client/common/Navbar";
import ProfileHeader from "./client/components/ProfileHeader";
import Biography from "./client/components/Biography";
import Skill from "./client/components/Skill";
import Featured from "./client/components/Featured";
import Footer from "./client/common/Footer";
import ModalSenGmail from "./client/common/ModalSenGmail";
import * as Lucide from "lucide-react";

export default function LayoutClient() {
  const [_data, setData] = useState<any | null>(null);


  const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || systemPrefersDark
  );
  const [isModalSenGmail, setIsModalSenGmail] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }, [isDarkMode]);
  console.log(_data);




  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

     
    <ProfileHeader
        isDarkMode={isDarkMode}
        Loading={setData}

        onClick={() => setIsModalSenGmail((prev) => !prev)}
      />
      <Biography isDarkMode={isDarkMode} />
      <Skill isDarkMode={isDarkMode} />
      <Featured isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      {isModalSenGmail && (
        <ModalSenGmail onClick={() => setIsModalSenGmail((prev) => !prev)} />
      )}
    {!_data || _data === null && <div className="absolute inset-0 bg-gray-900 text-white opacity-50 min-h-screen flex items-center justify-center pt-16 md:pt-20">
  <div>
    <Lucide.Loader2 size={30} className="animate-spin" />
  </div>
</div>}
    </div>
  );
}
