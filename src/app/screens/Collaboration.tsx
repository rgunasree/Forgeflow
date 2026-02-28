import { useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { User, Palette, Code2, Lightbulb, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function Collaboration() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("content");

  const roles = [
    { id: "content", label: "Content Lead", icon: User, color: "blue" },
    { id: "designer", label: "Designer", icon: Palette, color: "purple" },
    { id: "developer", label: "Developer", icon: Code2, color: "orange" },
  ];

  const suggestions = {
    content: [
      "Emphasize the problem-solution narrative",
      "Add more specific metrics and data points",
      "Strengthen the call-to-action on final slide",
    ],
    designer: [
      "Adjust color contrast for better readability",
      "Add visual hierarchy to key statistics",
      "Consider using icons for feature highlights",
    ],
    developer: [
      "Optimize landing page load performance",
      "Add responsive breakpoints for mobile",
      "Implement analytics tracking code",
    ],
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
        <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Collaboration Workspace
            </h1>
            <p className="text-gray-600">
              Role-based AI suggestions to optimize your content
            </p>
          </div>

          {/* Role Selector */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl p-2 inline-flex gap-2 border border-gray-200 shadow-sm">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                return (
                  <motion.button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    {role.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Editable Preview */}
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 p-12 text-white relative">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm mb-6">
                        Hackathon Pitch 2026
                      </div>
                      <h2 className="text-4xl font-bold mb-4">
                        Revolutionary AI Solution
                      </h2>
                      <p className="text-xl text-white/90">
                        Transforming the future of multimodal AI
                      </p>
                    </div>
                    
                    <div className="flex gap-8">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                        <div className="text-3xl font-bold">90%</div>
                        <div className="text-sm text-white/80">Efficiency Gain</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                        <div className="text-3xl font-bold">5x</div>
                        <div className="text-sm text-white/80">Faster Results</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                        <div className="text-3xl font-bold">100K</div>
                        <div className="text-sm text-white/80">Users Reached</div>
                      </div>
                    </div>
                  </div>

                  {/* Edit Indicators */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-blue-600 text-sm font-medium flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Live Editing Mode
                  </motion.div>
                </div>

                {/* Editor Controls */}
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                      Edit Text
                    </button>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                      Change Layout
                    </button>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                      Adjust Colors
                    </button>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                      Add Elements
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Collaboration Activity */}
              <motion.div
                className="mt-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MessageSquare size={20} className="text-blue-600" />
                  Team Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Palette size={16} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Sarah (Designer) updated slide 3</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Alex (Content Lead) added new metrics</p>
                      <p className="text-xs text-gray-500">15 minutes ago</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Suggestions Panel */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb size={20} className="text-orange-600" />
                  AI Suggestions for {roles.find(r => r.id === selectedRole)?.label}
                </h3>
                <div className="space-y-3">
                  {suggestions[selectedRole as keyof typeof suggestions].map((suggestion, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm text-gray-800">{suggestion}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={() => navigate("/export")}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Export Project
              </motion.button>

              {/* Team Members */}
              <motion.div
                className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <p className="text-sm font-medium text-gray-700 mb-3">Active Collaborators</p>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                    A
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                    S
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                    M
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs font-semibold">
                    +2
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
