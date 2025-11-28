import { CircularThermostat } from "@/components/CircularThermostat";
import { ModeSelector } from "@/components/ModeSelector";
import { FanSpeedSelector } from "@/components/FanSpeedSelector";
import { SwingToggle } from "@/components/SwingToggle";
import { TimerButton } from "@/components/TimerButton";

const ControlsScreen = () => (
  <div className="flex flex-col items-center min-h-[calc(100vh-64px)] pb-20 pt-8 px-4 bg-white">
    <CircularThermostat />
    <div className="mt-6 w-full flex flex-col items-center gap-2">
      <ModeSelector />
      <FanSpeedSelector />
      <SwingToggle />
      <TimerButton />
    </div>
  </div>
);

export default ControlsScreen;