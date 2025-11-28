import { useAcState } from "@/state/ac-context";
import {
  WifiStatusCard,
  DeviceHealthCard,
  SignalQualityCard,
} from "@/components/StatusCard";

const DeviceInfoScreen = () => {
  const {
    wifiStatus,
    lastCommand,
    power,
    temperature,
    mode,
    fanSpeed,
    swing,
    timer,
  } = useAcState();

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-64px)] pb-20 pt-8 px-4 bg-white">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-2xl font-bold text-blue-700 mb-2">
          Smart AC Model X
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span
            className={
              wifiStatus === "Connected"
                ? "text-green-500 font-semibold"
                : "text-red-500 font-semibold"
            }
          >
            {wifiStatus}
          </span>
          <span className="text-xs text-gray-400">(WiFi)</span>
        </div>
        <div className="mb-4">
          <div className="text-xs text-gray-400">Last Command</div>
          <div className="text-base font-semibold text-blue-700">
            {lastCommand}
          </div>
        </div>
        <div className="mb-4">
          <div className="text-xs text-gray-400">Current Settings</div>
          <div className="text-sm text-gray-700">
            Power: <b>{power ? "ON" : "OFF"}</b>
            <br />
            Temp: <b>{temperature}°C</b>
            <br />
            Mode: <b>{mode}</b>
            <br />
            Fan: <b>{fanSpeed}</b>
            <br />
            Swing: <b>{swing ? "ON" : "OFF"}</b>
            <br />
            Timer: <b>{timer}</b>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <WifiStatusCard status={wifiStatus} />
          <DeviceHealthCard />
          <SignalQualityCard />
        </div>
      </div>
    </div>
  );
};

export default DeviceInfoScreen;