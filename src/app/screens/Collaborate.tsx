import { Sidebar } from "../components/Sidebar";
import { Users, MessageSquare, Video, Bell } from "lucide-react";
import { motion } from "motion/react";

export function CollaboratePage() {
  const teams = [
    {
      id: 1,
      name: "Product Launch Team",
      members: 5,
      projects: 3,
      activity: "Active now",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Marketing Campaign",
      members: 8,
      projects: 7,
      activity: "2 hours ago",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Hackathon Squad",
      members: 4,
      projects: 2,
      activity: "Active now",
      color: "bg-orange-500",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Sarah Chen",
      action: "updated slides in TechFest Campaign",
      time: "5 minutes ago",
      avatar: "S",
      color: "bg-pink-500",
    },
    {
      id: 2,
      user: "Alex Rivera",
      action: "added comments to AI Hackathon Pitch",
      time: "12 minutes ago",
      avatar: "A",
      color: "bg-blue-500",
    },
    {
      id: 3,
      user: "Maria Santos",
      action: "exported final version of SaaS Launch",
      time: "1 hour ago",
      avatar: "M",
      color: "bg-green-500",
    },
    {
      id: 4,
      user: "James Wilson",
      action: "invited you to Developer Conference",
      time: "2 hours ago",
      avatar: "J",
      color: "bg-orange-500",
    },
    {
      id: 5,
      user: "Emma Davis",
      action: "started a new Fest Promotion Pack",
      time: "3 hours ago",
      avatar: "E",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPath="/collaborate" />
      
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
              Collaborate
            </h1>
            <p className="text-gray-600">
              Work together with your team on AI-powered projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Teams Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Teams</h2>
                <div className="space-y-4">
                  {teams.map((team, index) => (
                    <motion.div
                      key={team.id}
                      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`${team.color} w-12 h-12 rounded-xl flex items-center justify-center text-white`}>
                            <Users size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{team.name}</h3>
                            <p className="text-sm text-gray-600">
                              {team.members} members · {team.projects} projects
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">{team.activity}</span>
                          {team.activity === "Active now" && (
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-200">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      className="p-4 hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${activity.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                          {activity.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">{activity.user}</span>{" "}
                            {activity.action}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Actions */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors text-left">
                    <MessageSquare size={20} className="text-blue-600" />
                    <span className="font-medium text-gray-900">Start Chat</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-colors text-left">
                    <Video size={20} className="text-purple-600" />
                    <span className="font-medium text-gray-900">Video Call</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-colors text-left">
                    <Users size={20} className="text-green-600" />
                    <span className="font-medium text-gray-900">Invite Members</span>
                  </button>
                </div>
              </motion.div>

              {/* Notifications */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <Bell size={18} className="text-gray-600" />
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900 mb-1">New comment</p>
                    <p className="text-xs text-gray-600">Sarah mentioned you in TechFest</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900 mb-1">Project updated</p>
                    <p className="text-xs text-gray-600">AI Hackathon Pitch exported</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900 mb-1">New invitation</p>
                    <p className="text-xs text-gray-600">Join Developer Conference team</p>
                  </div>
                </div>
              </motion.div>

              {/* Online Team Members */}
              <motion.div
                className="bg-white rounded-2xl p-6 border border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h3 className="font-semibold text-gray-900 mb-4">Online Now</h3>
                <div className="space-y-3">
                  {["Sarah Chen", "Alex Rivera", "Emma Davis"].map((name, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {name[0]}
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{name}</p>
                        <p className="text-xs text-gray-500">Active now</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
