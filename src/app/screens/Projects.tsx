import { Sidebar } from "../components/Sidebar";
import { Sparkles, Calendar, Users, MoreVertical } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      id: 1,
      name: "TechFest 2026 Campaign",
      type: "Fest Promotion Pack",
      date: "Feb 26, 2026",
      collaborators: 3,
      status: "Completed",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "AI Hackathon Pitch",
      type: "Hackathon Pitch Kit",
      date: "Feb 23, 2026",
      collaborators: 2,
      status: "In Progress",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "SaaS Product Launch",
      type: "Startup Launch Builder",
      date: "Feb 21, 2026",
      collaborators: 5,
      status: "Completed",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Developer Conference 2026",
      type: "Fest Promotion Pack",
      date: "Feb 19, 2026",
      collaborators: 4,
      status: "Completed",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Startup Accelerator Demo Day",
      type: "Startup Launch Builder",
      date: "Feb 15, 2026",
      collaborators: 3,
      status: "Archived",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      name: "Innovation Summit Pitch",
      type: "Hackathon Pitch Kit",
      date: "Feb 10, 2026",
      collaborators: 2,
      status: "Completed",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPath="/projects" />
      
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
              My Projects
            </h1>
            <p className="text-gray-600">
              View and manage all your AI-generated content
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-1">8</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-orange-600 mb-1">2</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-gray-400 mb-1">2</div>
              <div className="text-sm text-gray-600">Archived</div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                {/* Thumbnail */}
                <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center text-white relative`}>
                  <Sparkles size={48} className="opacity-80" />
                  <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 flex-1">{project.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        project.status === "Completed"
                          ? "bg-green-50 text-green-700"
                          : project.status === "In Progress"
                          ? "bg-orange-50 text-orange-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{project.type}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{project.collaborators}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
