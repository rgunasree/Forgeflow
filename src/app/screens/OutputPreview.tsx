import { useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Presentation, FileImage, Globe, Share2, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "motion/react";

export function OutputPreview() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("slides");

  const tabs = [
    { id: "slides", label: "Slides", icon: Presentation },
    { id: "poster", label: "Poster", icon: FileImage },
    { id: "landing", label: "Landing Page", icon: Globe },
    { id: "social", label: "Social Content", icon: Share2 },
  ];

  const refinements = [
    { label: "Improve clarity", icon: Sparkles },
    { label: "Make more technical", icon: Target },
    { label: "Add visual impact", icon: Zap },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "slides":
        return (
          <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-12 text-white shadow-lg">
            <div className="h-full flex flex-col justify-between">
              <div>
                <motion.div
                  className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Hackathon Pitch 2026
                </motion.div>
                <motion.h2
                  className="text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Revolutionary AI Solution
                </motion.h2>
                <motion.p
                  className="text-xl text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Transforming the future of multimodal AI
                </motion.p>
              </div>
              
              <motion.div
                className="flex gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
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
              </motion.div>
            </div>
          </div>
        );
      
      case "poster":
        return (
          <div className="aspect-[2/3] max-h-[600px] bg-gradient-to-b from-orange-500 to-red-600 rounded-xl p-8 text-white shadow-lg">
            <motion.div
              className="h-full flex flex-col items-center justify-between text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-6xl font-bold mb-6">
                  HACKATHON
                  <br />
                  2026
                </div>
                <div className="text-2xl mb-8 text-white/90">
                  Revolutionary AI Solution
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <div className="text-4xl font-bold mb-2">March 15-17</div>
                  <div className="text-lg">Innovation Center</div>
                </div>
              </div>
              <div className="space-y-4 w-full">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-lg">
                  💡 AI-Powered Solutions
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-lg">
                  🚀 Edge Optimization
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-lg">
                  ⚡ Real-time Processing
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case "landing":
        return (
          <div className="aspect-video bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
            <motion.div
              className="h-full overflow-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
                <h1 className="text-3xl font-bold mb-3">Revolutionary AI Solution</h1>
                <p className="text-lg mb-4 text-white/90">Transform your workflow with AI-powered automation</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
                  Get Started
                </button>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-3 gap-4 p-8 bg-gray-50">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sparkles size={20} className="text-blue-600" />
                  </div>
                  <div className="text-sm font-semibold">AI-Powered</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap size={20} className="text-orange-600" />
                  </div>
                  <div className="text-sm font-semibold">Lightning Fast</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target size={20} className="text-green-600" />
                  </div>
                  <div className="text-sm font-semibold">Precise Results</div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case "social":
        return (
          <div className="grid grid-cols-2 gap-4">
            {[
              { bg: "from-pink-500 to-rose-500", text: "Launch Day! 🚀", subtitle: "Join us for the revolution" },
              { bg: "from-blue-500 to-cyan-500", text: "90% Efficiency", subtitle: "Proven results" },
              { bg: "from-purple-500 to-indigo-500", text: "AI Innovation", subtitle: "Next-gen technology" },
              { bg: "from-orange-500 to-amber-500", text: "5x Faster", subtitle: "Accelerated workflows" },
            ].map((post, index) => (
              <motion.div
                key={index}
                className={`aspect-square bg-gradient-to-br ${post.bg} rounded-xl p-6 text-white flex flex-col justify-between shadow-lg`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold">{post.text}</div>
                <div className="text-sm text-white/80">{post.subtitle}</div>
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
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
              Output Preview
            </h1>
            <p className="text-gray-600">
              Review and refine your AI-generated content
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-all relative ${
                    activeTab === tab.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Slide Preview */}
                {renderContent()}

                {/* Slide Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className={`w-2 h-2 rounded-full ${
                          num === 1 ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Slide 1 of 6</p>
                </div>
              </motion.div>
            </div>

            {/* Refinement Panel */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">AI Refinement Controls</h3>
                <div className="space-y-3">
                  {refinements.map((refinement, index) => {
                    const Icon = refinement.icon;
                    return (
                      <motion.button
                        key={refinement.label}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all text-left"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="bg-white p-2 rounded-lg">
                          <Icon size={16} className="text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-700">{refinement.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <motion.button
                onClick={() => navigate("/collaboration")}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Collaboration
              </motion.button>

              {/* Info */}
              <motion.div
                className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <p className="text-sm text-green-800">
                  <span className="font-semibold">✓ Generated successfully</span>
                  <br />
                  6 slides, 2 posters, 1 landing page, 8 social media posts
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}