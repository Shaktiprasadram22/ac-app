import { useAcState } from "@/state/ac-context";
import { cn } from "@/lib/utils";

const speeds: Array<{ label: string; value: "Low" | "Medium" | "High" }> = [
  { label: "Low", value: "Low" },
  { label: "Medium", value: "Medium" },
  { label: "High", value: "High" },
];

export const FanSpeedSelector = () => {
  const { fanSpeed, setFanSpeed, power } = useAcState();

  return (
    <div className="flex justify-center gap-2 mt-2">
      {speeds.map((s) => (
        <button
          key={s.value}
          className={cn(
            "px-4 py-2 rounded-full border transition-colors text-sm font-medium",
            fanSpeed === s.value
              ? "bg-blue-100 border-blue-400 text-blue-700"
              : "bg-white border-gray-200 text-gray-500 hover:bg-blue-50",
            !power && "opacity-50 pointer-events-none"
          )}
          onClick={() => setFanSpeed(s.value)}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
};