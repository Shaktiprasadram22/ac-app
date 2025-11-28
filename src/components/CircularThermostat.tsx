import { useAcState } from "@/state/ac-context";
import { cn } from "@/lib/utils";

export const CircularThermostat = () => {
  const { temperature, setTemperature, power } = useAcState();
  const minTemp = 16;
  const maxTemp = 30;

  // For simplicity, use a circular progress look with click to increase/decrease
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-44 h-44 flex items-center justify-center">
        <svg width={176} height={176} className="absolute">
          <circle
            cx={88}
            cy={88}
            r={80}
            stroke="#e0e7ef"
            strokeWidth={12}
            fill="none"
          />
          <circle
            cx={88}
            cy={88}
            r={80}
            stroke="#3b82f6"
            strokeWidth={12}
            fill="none"
            strokeDasharray={2 * Math.PI * 80}
            strokeDashoffset={
              2 * Math.PI * 80 * (1 - (temperature - minTemp) / (maxTemp - minTemp))
            }
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.3s" }}
          />
        </svg>
        <div className="flex flex-col items-center z-10">
          <span className="text-6xl font-extrabold text-blue-600 select-none" style={{ fontVariantNumeric: "tabular-nums" }}>
            {temperature}°
          </span>
          <span className="text-gray-400 text-xs mt-1">Temperature</span>
        </div>
        <button
          className={cn(
            "absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold border border-blue-200 shadow",
            !power && "opacity-50 pointer-events-none"
          )}
          onClick={() => setTemperature(Math.min(maxTemp, temperature + 1))}
          aria-label="Increase temperature"
        >
          +
        </button>
        <button
          className={cn(
            "absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold border border-blue-200 shadow",
            !power && "opacity-50 pointer-events-none"
          )}
          onClick={() => setTemperature(Math.max(minTemp, temperature - 1))}
          aria-label="Decrease temperature"
        >
          –
        </button>
      </div>
    </div>
  );
};