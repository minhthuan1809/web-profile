import {
  BookOpen,
  Target,
  User,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function Biography({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className={`min-h-screen p-8 pb-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent text-center m-5">
        Giới thiệu
      </h1>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Thông Tin Cá Nhân Section */}
        <section className="relative">
          <div
            className={`absolute -left-4 top-0 w-1 h-full rounded-full opacity-50 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          ></div>
          <div className="ml-8">
            <div className="flex items-center space-x-3 text-blue-500 mb-6">
              <div
                className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-blue-500/10" : "bg-blue-100"
                }`}
              >
                <User size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Thông Tin Cá Nhân
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Info Cards */}
              {[
                [
                  {
                    icon: User,
                    label: "Họ và tên",
                    value: "Nguyễn Minh Thuận",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "Thuan18092003@gmail.com",
                  },
                ],
                [
                  {
                    icon: Phone,
                    label: "Số điện thoại",
                    value: "+84 325 397 277",
                  },
                  { icon: MapPin, label: "Địa chỉ", value: "Hà Nội, Việt Nam" },
                ],
              ].map((cardInfo, idx) => (
                <div
                  key={idx}
                  className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:border-blue-500/30"
                      : "bg-white border-gray-200 hover:border-blue-300 shadow-sm"
                  }`}
                >
                  <div className="space-y-4">
                    {cardInfo.map(({ icon: Icon, label, value }, infoIdx) => (
                      <div
                        key={infoIdx}
                        className="flex items-center space-x-4"
                      >
                        <div
                          className={`p-3 rounded-lg ${
                            isDarkMode ? "bg-blue-500/10" : "bg-blue-50"
                          }`}
                        >
                          <Icon className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {label}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Học Vấn Section */}
        <section className="relative">
          <div
            className={`absolute -left-4 top-0 w-1 h-full rounded-full opacity-50 ${
              isDarkMode ? "bg-indigo-500" : "bg-indigo-400"
            }`}
          ></div>
          <div className="ml-8">
            <div className="flex items-center space-x-3 text-indigo-500 mb-6">
              <div
                className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-indigo-500/10" : "bg-indigo-100"
                }`}
              >
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Học Vấn
              </h2>
            </div>

            <div
              className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:border-indigo-500/30"
                  : "bg-white border-gray-200 hover:border-indigo-300 shadow-sm"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg mt-1 ${
                      isDarkMode ? "bg-indigo-500/10" : "bg-indigo-50"
                    }`}
                  >
                    <BookOpen className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Đại Học Công Nghệ Đông Á
                    </h3>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                    >
                      Ngành Công nghệ Thông tin | 2020 - 2024
                    </p>
                    <ul className="space-y-3 mt-4">
                      {[
                        "Chuyên ngành Công nghệ phần mềm",
                        "Sinh viên năm cuối ngành Công nghệ thông tin",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <ChevronRight className="w-4 h-4 text-indigo-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Định Hướng Phát Triển Section */}
        <section className="relative">
          <div
            className={`absolute -left-4 top-0 w-1 h-full rounded-full opacity-50 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          ></div>
          <div className="ml-8">
            <div className="flex items-center space-x-3 text-purple-500 mb-6">
              <div
                className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-purple-500/10" : "bg-purple-100"
                }`}
              >
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Định Hướng Phát Triển
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Hiện Tại",
                  items: [
                    "Tập trung phát triển kỹ năng Frontend với React.js, Next.js, và TypeScript",
                    "Nghiên cứu và áp dụng các best practices trong UI/UX với Tailwind CSS",
                    "Tham gia các dự án thực tế để tích lũy kinh nghiệm",
                  ],
                },
                {
                  title: "Mục Tiêu",
                  items: [
                    "Ngắn hạn: Trở thành Frontend Developer chuyên nghiệp, thành thạo các công nghệ hiện đại",
                    "Trung hạn: Mở rộng kiến thức về Backend để trở thành Fullstack Developer",
                    "Dài hạn: Đóng góp cho cộng đồng developer và phát triển các sản phẩm có tác động tích cực",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:border-purple-500/30"
                      : "bg-white border-gray-200 hover:border-purple-300 shadow-sm"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? "text-purple-300" : "text-purple-600"
                    }`}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-2">
                        <ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
