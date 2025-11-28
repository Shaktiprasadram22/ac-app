import { Home, SlidersHorizontal, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface TabBarProps {
  current: string;
  onChange: (tab: string) => void;
}

const tabs = [
  { key: "home", label: "Home", icon: Home },
  { key: "controls", label: "Controls", icon: SlidersHorizontal },
  { key: "device", label: "Device Info", icon: Info },
];

export const TabBar = ({ current, onChange }: TabBarProps) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-blue-100 flex justify-around py-2 z-50">
    {tabs.map((tab) => {
      const Icon = tab.icon;
      const active = current === tab.key;
      return (
        <button
          key={tab.key}
          className={cn(
            "flex flex-col items-center px-4 py-1 rounded transition-colors",
            active ? "text-blue-600" : "text-gray-400 hover:text-blue-400"
          )}
          onClick={() => onChange(tab.key)}
        >
          <Icon size={24} />
          <span className="text-xs mt-1">{tab.label}</span>
        </button>
      );
    })}
  </nav>
);