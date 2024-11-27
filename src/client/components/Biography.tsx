import * as Lucide from "lucide-react";
import { renderBiography } from "../../service/render_api";
import { useEffect, useState } from "react";

type BiographyProps = {
  title: string;
  about: {
    personalInfo: {
      title: string;
      icon: string;
      details: {
        icon: string;
        label: string;
        value: string;
      }[];
    };
    education: {
      title: string;
      icon: string;
      schools: {
        icon: string;
        name: string;
        major: string;
        period: string;
        details: string[];
      };
    };
    career: {
      title: string;
      icon: string;

      sections: [
        {
          title: string;
          items: string[];
        }
      ];
    };
  };
};

export default function Biography({ isDarkMode }: { isDarkMode: boolean }) {
  const [data, setData] = useState<BiographyProps | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await renderBiography();
      setData(data);
    };
    fetchData();
  }, []);

  const SocialIcon = ({
    platform,
    size,
    classname,
  }: {
    platform: string;
    size: number;
    classname: string;
  }) => {
    const IconComponent = (Lucide as any)[platform];
    return IconComponent ? (
      <IconComponent size={size} className={classname} />
    ) : null;
  };

  return (
    <div
      className={`min-h-screen p-8 pb-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent text-center m-5">
        {data?.title}
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
                <SocialIcon
                  platform={data?.about?.personalInfo.icon ?? "defaultIcon"}
                  size={24}
                  classname="w-6 h-6 text-blue-500"
                />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {data?.about?.personalInfo.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Info Cards */}
              {Object.entries(data?.about?.personalInfo?.details || {}).map(
                ([key, info]) => (
                  <div
                    key={key}
                    className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 hover:border-blue-500/30"
                        : "bg-white border-gray-200 hover:border-blue-300 shadow-sm"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-lg ${
                            isDarkMode ? "bg-blue-500/10" : "bg-blue-50"
                          }`}
                        >
                          <SocialIcon
                            platform={info.icon || "User"}
                            size={24}
                            classname="w-6 h-6 text-blue-500"
                          />
                        </div>
                        <div>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {info.label}
                          </p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
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
                <Lucide.BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {data?.about?.education?.title}
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
                    className={`p-3 rounded-lg mt-1 hidden md:block ${
                      isDarkMode ? "bg-indigo-500/10" : "bg-indigo-50"
                    }`}
                  >
                    <SocialIcon
                      platform={data?.about?.education?.icon ?? "defaultIcon"}
                      size={24}
                      classname="w-6 h-6 text-indigo-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {data?.about?.education?.schools.name}
                    </h3>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                    >
                      {data?.about?.education?.schools.major} |{" "}
                      {data?.about?.education?.schools.period}
                    </p>
                    <ul className="space-y-3 mt-4">
                      {data?.about?.education?.schools.details.map(
                        (item, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Lucide.ChevronRight className="w-4 h-4 text-indigo-500" />
                            <span>{item}</span>
                          </li>
                        )
                      )}
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
                <Lucide.Target size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {data?.about?.career?.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data?.about?.career?.sections.map((section, idx) => (
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
                        <Lucide.ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
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
