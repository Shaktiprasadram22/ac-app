import { useAcState } from "@/state/ac-context";
import { Clock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const timerOptions = ["Off", "1h", "2h", "4h", "8h"];

export const TimerButton = () => {
  const { timer, setTimer, power } = useAcState();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className={cn(
          "flex items-center gap-2 px-5 py-2 rounded-full text-base font-semibold border transition-colors shadow",
          timer !== "Off"
            ? "bg-blue-100 text-blue-700 border-blue-300"
            : "bg-gray-100 text-gray-400 border-gray-200 hover:bg-blue-50",
          !power && "opacity-50 pointer-events-none"
        )}
        onClick={() => setOpen((v) => !v)}
        aria-label="Set Timer"
      >
        <Clock size={20} />
        {timer === "Off" ? "Set Timer" : `Timer: ${timer}`}
      </button>
      {open && power && (
        <div className="absolute left-0 mt-2 bg-white border border-blue-100 rounded-lg shadow-lg z-10 w-32">
          {timerOptions.map((opt) => (
            <button
              key={opt}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm hover:bg-blue-50",
                timer === opt && "font-bold text-blue-600"
              )}
              onClick={() => {
                setTimer(opt);
                setOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};