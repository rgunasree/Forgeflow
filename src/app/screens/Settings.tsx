import { Sidebar } from "../components/Sidebar";
import { User, Bell, Palette, Shield, Cpu, Globe } from "lucide-react";
import { motion } from "motion/react";

export function Settings() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPath="/settings" />
      
      <motion.div 
        className="flex-1 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Settings
            </h1>
            <p className="text-gray-600">
              Manage your account and application preferences
            </p>
          </div>

          <div className="space-y-6">
            {/* Profile Settings */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    U
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors">
                      Change Avatar
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-50 p-2 rounded-lg">
                    <Bell size={20} className="text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Project Updates</p>
                    <p className="text-sm text-gray-600">Get notified when projects are updated</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Team Collaboration</p>
                    <p className="text-sm text-gray-600">Notifications from team members</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">AI Generation Complete</p>
                    <p className="text-sm text-gray-600">When AI finishes generating content</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Appearance */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 p-2 rounded-lg">
                    <Palette size={20} className="text-orange-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Appearance</h2>
                </div>
              </div>
              <div className="p-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">Theme</label>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="p-4 border-2 border-blue-600 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                      <div className="w-full h-12 bg-white border border-gray-200 rounded mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Light</p>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                      <div className="w-full h-12 bg-gray-900 rounded mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Dark</p>
                    </button>
                    <button className="p-4 border-2 border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                      <div className="w-full h-12 bg-gradient-to-r from-white to-gray-900 rounded mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Auto</p>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Settings */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-lg">
                    <Cpu size={20} className="text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">AI Optimization</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">AMD Edge Acceleration</p>
                    <p className="text-sm text-gray-600">Hardware-accelerated AI processing</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Generation Quality</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>High Quality (Slower)</option>
                    <option>Balanced</option>
                    <option>Fast (Lower Quality)</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Privacy & Security */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 p-2 rounded-lg">
                    <Shield size={20} className="text-red-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Privacy & Security</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
                  <p className="font-medium text-gray-900">Change Password</p>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
                  <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
                  <p className="font-medium text-gray-900">Data & Privacy Settings</p>
                </button>
              </div>
            </motion.div>

            {/* Language & Region */}
            <motion.div
              className="bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-50 p-2 rounded-lg">
                    <Globe size={20} className="text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Language & Region</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Language</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Time Zone</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC+0 (GMT)</option>
                    <option>UTC+1 (CET)</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Save Button */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">
                Save Changes
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold border-2 border-gray-200 transition-all">
                Cancel
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
