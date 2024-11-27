import { ExternalLink } from "lucide-react";
import { renderProjects } from "../../service/render_api";
import { useEffect, useState } from "react";

export default function Featured({ isDarkMode }: { isDarkMode: boolean }) {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await renderProjects();
      setData(data[0]);
    };
    fetchData();
  }, []);

  return (
    <div
      className={`w-full py-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl m-8 font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent `}
        >
          {data?.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data?.map((project: any) => (
            <div
              key={project.id}
              className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Xem chi tiết
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
