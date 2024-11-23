import { Mail, Download, Github, Facebook, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
//minhthuan
export default function ProfileHeader({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex items-center justify-center pt-16 md:pt-20 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 b">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12">
          {/* Profile Image with Enhanced Animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className={`relative w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden 
            ${isDarkMode ? "ring-blue-400" : "ring-blue-500"} 
            ring-4 ring-offset-4 
            ${isDarkMode ? "ring-offset-gray-900" : "ring-offset-white"}
            transform transition-all duration-300 shadow-2xl
            hover:shadow-blue-500/25`}
          >
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/425504626_1677896819407548_3902130220591766840_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=v60bsi1ypBgQ7kNvgERf3FT&_nc_zt=24&_nc_ht=scontent-hkg1-1.xx&_nc_gid=AknPSN0IINoPyJePR4NmKOr&oh=00_AYBf2d8XX7SGFeCW9Cev8Oig_CBME3y_bdcnQSHlZEdkKQ&oe=67478328"
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-300"
            />
          </motion.div>

          {/* Content Section with Enhanced Typography */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center"
          >
            <div className="space-y-6">
              {/* Name with Gradient */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`text-3xl md:text-5xl font-bold tracking-tight p-4
                ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-400 to-purple-400"
                    : "bg-gradient-to-r from-blue-600 to-purple-600"
                } 
                bg-clip-text text-transparent`}
              >
                Nguyễn Minh Thuận
              </motion.h1>

              {/* Title with Enhanced Contrast */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-lg md:text-2xl font-semibold
                ${isDarkMode ? "text-blue-300" : "text-blue-600"}
                transition-colors duration-300`}
              >
                Nhà Phát Triển Frontend
              </motion.h2>

              {/* Bio with Better Readability */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-lg leading-relaxed mx-auto max-w-2xl
                ${isDarkMode ? "text-gray-300" : "text-gray-600"}
                transition-colors duration-300`}
              >
                Nhà phát triển front-end đam mê với chuyên môn về lập trình web
                và các công nghệ web hiện đại. Tạo các ứng dụng web đẹp, phản
                hồi nhanh và thân thiện với người dùng.
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  ${
                    isDarkMode
                      ? "bg-blue-500 hover:bg-blue-400 text-white"
                      : "bg-blue-600 hover:bg-blue-500 text-white"
                  }
                  transition-colors duration-300 font-medium`}
                >
                  <Mail size={20} />
                  Liên hệ
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }
                  transition-colors duration-300 font-medium`}
                >
                  <Download size={20} />
                  Tải CV
                </motion.button>
              </motion.div>

              {/* Skills Tags with Enhanced Styling */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-2 justify-center mt-6"
              >
                {["React", "TypeScript", "Next.js", "Tailwind CSS"].map(
                  (skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium
                      ${
                        isDarkMode
                          ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }
                      transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-4 justify-center mt-8"
              >
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://github.com/minhthuan1809"
                  target="_blank"
                  className={`p-2 rounded-full 
                  ${
                    isDarkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                  }
                  transition-colors duration-300`}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://www.facebook.com/minhthuan1809"
                  target="_blank"
                  className={`p-2 rounded-full
                  ${
                    isDarkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-gray-200"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                  }
                  transition-colors duration-300`}
                >
                  <Facebook size={24} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute bottom-20 right-[50%] animate-bounce hi "
          >
            <div className="border-blue-500 border-2 rounded-full p-2">
              <ArrowDown size={30} className="text-blue-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
