import BtnDarkmode from "../../shared/BtnDarkmode";

export default function Navbar({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}) {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 shadow-md ">
      <div className="flex justify-between w-[80%] mx-auto items-center p-4">
        <h1 className="text-2xl font-bold">MINHTHUAN</h1>
        <div>
          <ul className="flex gap-4 text-lg justify-center items-center">
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Kỹ năng</li>
            <li>Kinh nghiệm</li>
            <li>Dự án</li>
            <li>Liên hệ</li>
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
