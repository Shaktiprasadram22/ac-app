import { Wifi, HeartPulse, Signal } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
}

export const StatusCard = ({ icon, label, value, color }: StatusCardProps) => (
  <div
    className={cn(
      "flex items-center gap-3 bg-white rounded-xl shadow border border-blue-100 px-4 py-3 w-full max-w-xs mx-auto",
      color
    )}
  >
    <div className="bg-blue-50 rounded-full p-2">{icon}</div>
    <div>
      <div className="text-xs text-gray-400">{label}</div>
      <div className="text-base font-bold text-blue-700">{value}</div>
    </div>
  </div>
);

export const WifiStatusCard = ({ status }: { status: string }) => (
  <StatusCard
    icon={<Wifi className={status === "Connected" ? "text-blue-500" : "text-gray-300"} size={20} />}
    label="WiFi"
    value={status}
  />
);

export const DeviceHealthCard = () => (
  <StatusCard
    icon={<HeartPulse className="text-green-500" size={20} />}
    label="Device Health"
    value="Good"
  />
);

export const SignalQualityCard = () => (
  <StatusCard
    icon={<Signal className="text-yellow-500" size={20} />}
    label="Signal Quality"
    value="Excellent"
  />
);