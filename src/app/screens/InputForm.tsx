import { useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Sparkles, Target, Users, Lightbulb, Gem, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function InputForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    problemStatement: "",
    targetAudience: "",
    keyFeatures: "",
    uniqueValue: "",
    constraints: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    navigate("/ai-processing");
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
              Define Your Project
            </h1>
            <p className="text-gray-600">
              Provide key details to generate your hackathon pitch kit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Problem Statement */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <AlertCircle size={20} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Problem Statement</h3>
                </div>
                <textarea
                  value={formData.problemStatement}
                  onChange={(e) => handleChange("problemStatement", e.target.value)}
                  placeholder="What problem does your project solve?"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={4}
                />
              </motion.div>

              {/* Target Audience */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Target Audience</h3>
                </div>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => handleChange("targetAudience", e.target.value)}
                  placeholder="Who will benefit from your solution?"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                />
              </motion.div>

              {/* Key Features */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Target size={20} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Key Features</h3>
                </div>
                <textarea
                  value={formData.keyFeatures}
                  onChange={(e) => handleChange("keyFeatures", e.target.value)}
                  placeholder="List the main features of your project"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={4}
                />
              </motion.div>

              {/* Unique Value */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Gem size={20} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Unique Value Proposition</h3>
                </div>
                <textarea
                  value={formData.uniqueValue}
                  onChange={(e) => handleChange("uniqueValue", e.target.value)}
                  placeholder="What makes your solution unique?"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                />
              </motion.div>

              {/* Constraints */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Constraints & Requirements</h3>
                </div>
                <textarea
                  value={formData.constraints}
                  onChange={(e) => handleChange("constraints", e.target.value)}
                  placeholder="Any specific requirements or limitations?"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-orange-500/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={24} />
                Generate with AI Workflow Engine
              </motion.button>
            </div>

            {/* Preview Panel */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">AI Preview</h3>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 min-h-[400px] flex items-center justify-center border border-blue-200">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4 inline-block">
                      <Sparkles size={48} className="text-blue-600" />
                    </div>
                    <p className="text-gray-600">
                      Your AI-generated content preview will appear here
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Structured input processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Multi-modal AI orchestration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>High-quality output generation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
