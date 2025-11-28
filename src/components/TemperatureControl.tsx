import { useAcState } from "@/state/ac-context";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const TemperatureControl = () => {
  const { temperature, setTemperature, power } = useAcState();

  const minTemp = 16;
  const maxTemp = 30;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-6">
        <button
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 text-blue-500 text-3xl font-bold border border-blue-200 transition-all",
            !power && "opacity-50 pointer-events-none"
          )}
          onClick={() => setTemperature(Math.max(minTemp, temperature - 1))}
          aria-label="Decrease temperature"
        >
          <Minus />
        </button>
        <span className="text-7xl font-extrabold text-blue-600 select-none" style={{ fontVariantNumeric: "tabular-nums" }}>
          {temperature}°
        </span>
        <button
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 text-blue-500 text-3xl font-bold border border-blue-200 transition-all",
            !power && "opacity-50 pointer-events-none"
          )}
          onClick={() => setTemperature(Math.min(maxTemp, temperature + 1))}
          aria-label="Increase temperature"
        >
          <Plus />
        </button>
      </div>
      <div className="text-gray-400 text-xs mt-2">Set Temperature</div>
    </div>
  );
};