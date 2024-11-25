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
    <div className="fixed top-0 left-0 right-0 w-full z-50 shadow-md ">
      <div className="flex justify-between w-[80%] mx-auto items-center p-4">
        <h1 className="text-2xl font-bold">{data?.logo}</h1>
        <div>
          <ul className="flex gap-4 text-lg justify-center items-center">
            {data?.menuItems.map((item) => (
              <li key={item.name}>{item.name}</li>
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
