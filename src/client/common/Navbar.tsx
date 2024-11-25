import { useEffect, useState } from "react";
import { renderNavbar } from "../../service/render_api";
import BtnDarkmode from "../../shared/BtnDarkmode";

// Định nghĩa kiểu dữ liệu cho data
type NavbarData = {
  logo: string;
  menuItems: {
    name: string;
    link: string;
  }[];
};

export default function Navbar({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}) {
  const [data, setData] = useState<NavbarData | null>(null);
  const fetchNavbar = async () => {
    const data = await renderNavbar();
    setData(data);
  };
  useEffect(() => {
    fetchNavbar();
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 z-50">
      <div className="flex lg:justify-evenly justify-between w-full lg:w-[80%] mx-auto items-center p-4">
        <h1 className="text-2xl font-bold">{data?.logo}</h1>
        <div>
          <ul className="flex  gap-4 text-lg justify-center items-center  ">
            {data?.menuItems.map((item) => (
              <li key={item.name} className="hidden md:block">
                {item.name}
              </li>
            ))}
            <BtnDarkmode
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
