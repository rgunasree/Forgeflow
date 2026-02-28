import { LayoutDashboard, Sparkles, FolderOpen, Users, Settings } from "lucide-react";
import { useNavigate } from "react-router";

interface SidebarProps {
  currentPath?: string;
}

export function Sidebar({ currentPath = "/" }: SidebarProps) {
  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/", enabled: true },
    { icon: Sparkles, label: "Creation Flows", path: "/select-flow", enabled: true },
    { icon: FolderOpen, label: "My Projects", path: "/projects", enabled: true },
    { icon: Users, label: "Collaborate", path: "/collaborate", enabled: true },
    { icon: Settings, label: "Settings", path: "/settings", enabled: true },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.enabled) {
      navigate(item.path);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">ForgeFlow Edge</h1>
        <p className="text-xs text-gray-500 mt-1">Promptless Multimodal GenAI OS</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            return (
              <li key={item.path}>
                <button
                  onClick={() => handleNavClick(item)}
                  disabled={!item.enabled}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : item.enabled
                      ? "text-gray-700 hover:bg-gray-50"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-700">AMD Edge Optimization Enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
}