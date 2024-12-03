import * as Lucide from "lucide-react";
import { motion } from "framer-motion";
import { renderHeader } from "../../service/render_api";
import { useEffect, useState } from "react";

type HeaderData = {
  name: string;
  title: string;
  description: string;
  skills: string[];
  img: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
};

// Icon mapping cho social links
const SocialIcon = ({ platform, size }: { platform: string; size: number }) => {
  const IconComponent = (Lucide as any)[platform];
  return IconComponent ? <IconComponent size={size} /> : null;
};

export default function ProfileHeader({
  isDarkMode,
  onClick,
}: {
  isDarkMode: boolean;
  onClick: any;
}) {
  const [data, setData] = useState<HeaderData | null>(null);

  useEffect(() => {
    const fetchHeader = async () => {
      const data = await renderHeader();
      setData(data);
    };
    fetchHeader();
  });

  const themeStyles = {
    container: isDarkMode
      ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
      : "bg-gradient-to-b from-blue-50 to-white text-gray-900",
    ring: isDarkMode ? "ring-blue-400" : "ring-blue-500",
    ringOffset: isDarkMode ? "ring-offset-gray-900" : "ring-offset-white",
    nameGradient: isDarkMode
      ? "bg-gradient-to-r from-blue-400 to-purple-400"
      : "bg-gradient-to-r from-blue-600 to-purple-600",
    title: isDarkMode ? "text-blue-300" : "text-blue-600",
    description: isDarkMode ? "text-gray-300" : "text-gray-600",
    primaryButton: isDarkMode
      ? "bg-blue-500 hover:bg-blue-400 text-white"
      : "bg-blue-600 hover:bg-blue-500 text-white",
    secondaryButton: isDarkMode
      ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800",
    skillTag: isDarkMode
      ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200",
    socialLink: isDarkMode
      ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex items-center justify-center pt-16 md:pt-20 ${themeStyles.container} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className={`relative w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden 
            ${themeStyles.ring} ring-4 ring-offset-4 ${themeStyles.ringOffset}
            transform transition-all duration-300 shadow-2xl hover:shadow-blue-500/25`}
          >
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={data?.img}
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-300"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center"
          >
            <div className="space-y-6">
              {/* Name */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`text-3xl md:text-5xl font-bold tracking-tight p-4
                ${themeStyles.nameGradient} bg-clip-text text-transparent`}
              >
                {data?.name}
              </motion.h1>

              {/* Title */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-lg md:text-2xl font-semibold ${themeStyles.title} transition-colors duration-300`}
              >
                {data?.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-lg leading-relaxed mx-auto max-w-2xl ${themeStyles.description} transition-colors duration-300`}
              >
                {data?.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${themeStyles.primaryButton} transition-colors duration-300 font-medium`}
                  onClick={onClick}
                >
                  <Lucide.Mail size={20} />
                  Liên hệ
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${themeStyles.secondaryButton} transition-colors duration-300 font-medium`}
                >
                  <Lucide.Download size={20} />
                  Tải CV
                </motion.button>
              </motion.div>

              {/* Skills Tags */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-2 justify-center mt-6"
              >
                {data?.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${themeStyles.skillTag} transition-all duration-200 cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-4 justify-center mt-8"
              >
                {data?.socialLinks.map((link) => (
                  <motion.a
                    key={link.platform}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${themeStyles.socialLink} transition-colors duration-300`}
                  >
                    <SocialIcon platform={link.platform} size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute bottom-20 right-[50%] animate-bounce hidden md:block"
          >
            <div className="border-blue-500 border-2 rounded-full p-2">
              <Lucide.ArrowDown size={30} className="text-blue-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
