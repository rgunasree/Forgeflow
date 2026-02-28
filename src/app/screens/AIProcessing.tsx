import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { FileText, Image, Code, Cpu } from "lucide-react";
import { motion } from "motion/react";

export function AIProcessing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate after 4 seconds
    const timer = setTimeout(() => {
      navigate("/output-preview");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const aiSteps = [
    { icon: FileText, label: "Text AI", color: "blue", delay: 0 },
    { icon: Image, label: "Image AI", color: "purple", delay: 0.2 },
    { icon: Code, label: "Code AI", color: "orange", delay: 0.4 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPath="/select-flow" />
      
      <motion.div 
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center max-w-2xl px-8">
          {/* Main Animation */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-orange-200"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ width: 160, height: 160, left: -20, top: -20 }}
              />
              
              {/* Center icon */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl shadow-2xl">
                <Cpu size={64} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl font-semibold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Running AI Workflow Engine...
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Orchestrating Text AI, Image AI, Code AI
            <br />
            <span className="text-orange-600 font-medium">Optimized with AMD Edge Acceleration</span>
          </motion.p>

          {/* AI Steps */}
          <div className="flex justify-center gap-8 mb-12">
            {aiSteps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                blue: "bg-blue-50 border-blue-200",
                purple: "bg-purple-50 border-purple-200",
                orange: "bg-orange-50 border-orange-200",
              };
              const iconColors = {
                blue: "text-blue-600",
                purple: "text-purple-600",
                orange: "text-orange-600",
              };
              
              return (
                <motion.div
                  key={step.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + step.delay }}
                >
                  <motion.div
                    className={`${colorClasses[step.color as keyof typeof colorClasses]} w-20 h-20 rounded-2xl flex items-center justify-center border-2 mx-auto mb-3`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: step.delay 
                    }}
                  >
                    <Icon size={32} className={iconColors[step.color as keyof typeof iconColors]} />
                  </motion.div>
                  <p className="text-sm font-medium text-gray-700">{step.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <motion.div
            className="bg-gray-200 h-2 rounded-full overflow-hidden max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Status Messages */}
          <motion.div
            className="mt-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.p
              className="text-sm text-gray-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Analyzing input structure...
            </motion.p>
            <motion.p
              className="text-sm text-gray-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              Generating multimodal content...
            </motion.p>
            <motion.p
              className="text-sm text-gray-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              Optimizing output quality...
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
