import { useAcState } from "@/state/ac-context";
import { cn } from "@/lib/utils";

const modes: Array<{ label: string; value: "Cool" | "Dry" | "Fan" }> = [
  { label: "Cool", value: "Cool" },
  { label: "Dry", value: "Dry" },
  { label: "Fan", value: "Fan" },
];

export const ModeSelector = () => {
  const { mode, setMode, power } = useAcState();

  return (
    <div className="flex justify-center gap-2 mt-2">
      {modes.map((m) => (
        <button
          key={m.value}
          className={cn(
            "px-4 py-2 rounded-full border transition-colors text-sm font-medium",
            mode === m.value
              ? "bg-blue-100 border-blue-400 text-blue-700"
              : "bg-white border-gray-200 text-gray-500 hover:bg-blue-50",
            !power && "opacity-50 pointer-events-none"
          )}
          onClick={() => setMode(m.value)}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
};