import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { FileText, FileImage, Code, Link2, Download, CheckCircle2, Cpu } from "lucide-react";
import { motion } from "motion/react";

export function Export() {
  const [exportStatus, setExportStatus] = useState<string[]>([]);

  const handleExport = (type: string) => {
    if (!exportStatus.includes(type)) {
      setExportStatus([...exportStatus, type]);
    }
  };

  const exportOptions = [
    {
      id: "ppt",
      title: "Download PPT",
      description: "Get editable PowerPoint presentation",
      icon: FileText,
      color: "blue",
      fileSize: "2.4 MB",
    },
    {
      id: "poster",
      title: "Export Poster ZIP",
      description: "High-resolution posters and graphics",
      icon: FileImage,
      color: "purple",
      fileSize: "8.7 MB",
    },
    {
      id: "code",
      title: "Generate Landing Page Code",
      description: "Production-ready HTML/CSS/JS",
      icon: Code,
      color: "orange",
      fileSize: "1.2 MB",
    },
    {
      id: "share",
      title: "Share Link",
      description: "Collaborative view & edit link",
      icon: Link2,
      color: "green",
      fileSize: "N/A",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        button: "bg-orange-600 hover:bg-orange-700",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPath="/select-flow" />
      
      <motion.div 
        className="flex-1 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-6xl mx-auto p-8">
          {/* Success Animation */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2 
              }}
            >
              <CheckCircle2 size={48} className="text-green-600" />
            </motion.div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Assets Generated Successfully
            </h1>
            <p className="text-gray-600">
              Your project is ready to export and share
            </p>
          </motion.div>

          {/* Export Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {exportOptions.map((option, index) => {
              const Icon = option.icon;
              const colors = getColorClasses(option.color);
              const isExported = exportStatus.includes(option.id);
              
              return (
                <motion.div
                  key={option.id}
                  className={`bg-white rounded-2xl p-6 border-2 ${colors.border} shadow-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center`}>
                      <Icon size={28} className={colors.text} />
                    </div>
                    {isExported && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-green-100 p-1 rounded-full"
                      >
                        <CheckCircle2 size={20} className="text-green-600" />
                      </motion.div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{option.fileSize}</span>
                    <motion.button
                      onClick={() => handleExport(option.id)}
                      disabled={isExported}
                      className={`${
                        isExported 
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                          : `${colors.button} text-white`
                      } px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-all`}
                      whileHover={!isExported ? { scale: 1.05 } : {}}
                      whileTap={!isExported ? { scale: 0.95 } : {}}
                    >
                      {isExported ? (
                        <>
                          <CheckCircle2 size={16} />
                          Exported
                        </>
                      ) : (
                        <>
                          <Download size={16} />
                          Export
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Project Summary */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h3 className="font-semibold text-gray-900 mb-6">Project Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">6</div>
                <div className="text-sm text-gray-600">Presentation Slides</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-sm text-gray-600">Posters Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
                <div className="text-sm text-gray-600">Landing Page</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
                <div className="text-sm text-gray-600">Social Media Posts</div>
              </div>
            </div>
          </motion.div>

          {/* AMD Optimization Footer */}
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Cpu size={32} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Hardware Optimized via AMD AI Acceleration
                  </h4>
                  <p className="text-sm text-gray-600">
                    All assets generated using AMD Edge AI optimization for 5x faster processing
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">2.3s</div>
                <div className="text-xs text-gray-600">Total Generation Time</div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <motion.button
              onClick={() => window.location.href = "/"}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-blue-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start New Project
            </motion.button>
            <motion.button
              className="flex-1 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-semibold border-2 border-gray-200 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
