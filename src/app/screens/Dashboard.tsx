import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Plus, Clock, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Dashboard() {
  const navigate = useNavigate();

  const recentProjects = [
    {
      id: 1,
      name: "TechFest 2026 Campaign",
      type: "Fest Promotion Pack",
      date: "2 days ago",
      status: "Completed",
    },
    {
      id: 2,
      name: "AI Hackathon Pitch",
      type: "Hackathon Pitch Kit",
      date: "5 days ago",
      status: "In Progress",
    },
    {
      id: 3,
      name: "SaaS Product Launch",
      type: "Startup Launch Builder",
      date: "1 week ago",
      status: "Completed",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPath="/" />
      
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
              Welcome back to ForgeFlow Edge
            </h1>
            <p className="text-gray-600">
              Create stunning presentations, campaigns, and launch materials with AI
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => navigate("/select-flow")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-lg shadow-blue-500/30 transition-all mb-12"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={24} />
            Start New Creation Flow
          </motion.button>

          {/* Recent Projects */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock size={20} className="text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <Sparkles size={24} className="text-blue-600" />
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        project.status === "Completed"
                          ? "bg-green-50 text-green-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.type}</p>
                  <p className="text-xs text-gray-500">{project.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Projects Created</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
              <div className="text-sm text-gray-600">Active Collaborations</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">142</div>
              <div className="text-sm text-gray-600">Assets Generated</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
