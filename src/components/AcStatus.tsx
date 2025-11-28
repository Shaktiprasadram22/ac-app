import { useAcState } from "@/state/ac-context";

export const AcStatus = () => {
  const { power, temperature, mode, fanSpeed } = useAcState();

  return (
    <div className="mt-6 bg-white rounded-xl shadow border border-blue-100 px-6 py-4 flex flex-col items-center gap-2 w-full max-w-xs mx-auto">
      <div className="flex justify-between w-full text-sm">
        <span className="font-semibold text-gray-500">Power</span>
        <span className={power ? "text-blue-600 font-bold" : "text-gray-400"}>{power ? "ON" : "OFF"}</span>
      </div>
      <div className="flex justify-between w-full text-sm">
        <span className="font-semibold text-gray-500">Temperature</span>
        <span className="text-blue-600 font-bold">{temperature}°C</span>
      </div>
      <div className="flex justify-between w-full text-sm">
        <span className="font-semibold text-gray-500">Mode</span>
        <span className="text-blue-600 font-bold">{mode}</span>
      </div>
      <div className="flex justify-between w-full text-sm">
        <span className="font-semibold text-gray-500">Fan Speed</span>
        <span className="text-blue-600 font-bold">{fanSpeed}</span>
      </div>
    </div>
  );
};