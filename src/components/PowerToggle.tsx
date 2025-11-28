import { useAcState } from "@/state/ac-context";
import { Power } from "lucide-react";
import { cn } from "@/lib/utils";

export const PowerToggle = () => {
  const { power, setPower } = useAcState();

  return (
    <button
      className={cn(
        "flex items-center gap-2 px-6 py-2 rounded-full text-lg font-semibold border transition-colors shadow",
        power
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-gray-100 text-gray-400 border-gray-200 hover:bg-blue-50"
      )}
      onClick={() => setPower(!power)}
      aria-label="Toggle Power"
    >
      <Power className={power ? "text-white" : "text-blue-400"} size={22} />
      {power ? "Power ON" : "Power OFF"}
    </button>
  );
};