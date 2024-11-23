import { Code2, Palette, Wrench } from "lucide-react";

export default function Skill({ isDarkMode }: { isDarkMode: boolean }) {
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      category: "UI Libraries",
      icon: Palette,
      items: ["Tailwind CSS", "Material UI", "Styled Components", "motion dev"],
    },
    {
      category: "Development Tools",
      icon: Wrench,
      items: ["Git", "VS Code", "vite", "npm"],
    },
  ];

  return (
    <div
      className={`min-h-[50vh] py-16 p-8 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl m-8 font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Kỹ Năng
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all duration-300 ${
                isDarkMode
                  ? "bg-white/5 border border-white/10 hover:border-blue-500/30"
                  : "bg-white border border-gray-200 hover:border-blue-300 shadow-sm"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    isDarkMode ? "bg-blue-500/10" : "bg-blue-50"
                  }`}
                >
                  <skill.icon className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold text-xl">{skill.category}</h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {skill.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      isDarkMode
                        ? "bg-blue-500/10 text-blue-300"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
