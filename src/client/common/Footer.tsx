import { Facebook, Github } from "lucide-react";

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="py-7">
      <div className="flex justify-center items-center pb-5 gap-5">
        <a
          href="https://github.com/minhthuan1809"
          target="_blank"
          className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.facebook.com/minhthuan1809"
          target="_blank"
          className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          <Facebook size={24} />
        </a>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">
          &copy; 2024 Nguyễn Minh Thuận. All rights reserved.
        </p>
      </div>
    </div>
  );
}
