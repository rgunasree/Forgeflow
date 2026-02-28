import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Trophy, PartyPopper, Rocket, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function SelectFlow() {
  const navigate = useNavigate();

  const flows = [
    {
      id: "hackathon",
      title: "Hackathon Pitch Kit",
      description: "Complete pitch deck, demo slides, and presentation materials for hackathon competitions",
      icon: Trophy,
      color: "blue",
    },
    {
      id: "fest",
      title: "Fest Promotion Pack",
      description: "Social media graphics, posters, landing pages, and promotional content for events",
      icon: PartyPopper,
      color: "purple",
    },
    {
      id: "startup",
      title: "Startup Launch Builder",
      description: "Investor pitch deck, product landing page, and launch campaign materials",
      icon: Rocket,
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-400",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-400",
        button: "bg-purple-600 hover:bg-purple-700",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:border-orange-400",
        button: "bg-orange-600 hover:bg-orange-700",
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
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Choose a Creation Flow
            </h1>
            <p className="text-gray-600">
              Select the type of content you want to generate with AI
            </p>
          </div>

          {/* Flow Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flows.map((flow, index) => {
              const Icon = flow.icon;
              const colors = getColorClasses(flow.color);
              
              return (
                <motion.div
                  key={flow.id}
                  className={`bg-white rounded-2xl p-8 border-2 ${colors.border} ${colors.hover} transition-all cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Icon */}
                  <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon size={32} className={colors.text} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {flow.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {flow.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    onClick={() => navigate("/input-form")}
                    className={`w-full ${colors.button} text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Flow
                    <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Info Footer */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Rocket size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">AI-Powered Workflow Engine</h4>
                <p className="text-sm text-gray-600">
                  Each flow automatically orchestrates multiple AI models to generate cohesive, professional content
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
