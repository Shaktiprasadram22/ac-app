import { useAcState } from "@/state/ac-context";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export const SwingToggle = () => {
  const { swing, setSwing, power } = useAcState();

  return (
    <button
      className={cn(
        "flex items-center gap-2 px-5 py-2 rounded-full text-base font-semibold border transition-colors shadow",
        swing
          ? "bg-blue-100 text-blue-700 border-blue-300"
          : "bg-gray-100 text-gray-400 border-gray-200 hover:bg-blue-50",
        !power && "opacity-50 pointer-events-none"
      )}
      onClick={() => setSwing(!swing)}
      aria-label="Toggle Swing"
    >
      <RefreshCw className={swing ? "animate-spin" : ""} size={20} />
      {swing ? "Swing ON" : "Swing OFF"}
    </button>
  );
};