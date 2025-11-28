import { TemperatureControl } from "@/components/TemperatureControl";
import { PowerToggle } from "@/components/PowerToggle";
import { ModeSelector } from "@/components/ModeSelector";
import { FanSpeedSelector } from "@/components/FanSpeedSelector";
import { AcStatus } from "@/components/AcStatus";

const HomeScreen = () => (
  <div className="flex flex-col items-center justify-between min-h-[calc(100vh-64px)] pb-20 pt-8 px-4 bg-white">
    <div className="w-full flex flex-col items-center">
      <TemperatureControl />
      <div className="mt-6">
        <PowerToggle />
      </div>
      <div className="mt-6">
        <ModeSelector />
      </div>
      <div className="mt-2">
        <FanSpeedSelector />
      </div>
    </div>
    <AcStatus />
  </div>
);

export default HomeScreen;