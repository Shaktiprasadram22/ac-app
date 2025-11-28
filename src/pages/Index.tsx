import React, { useState } from "react";
import { AcStateProvider } from "@/state/ac-context";
import HomeScreen from "./HomeScreen";
import ControlsScreen from "./ControlsScreen";
import DeviceInfoScreen from "./DeviceInfoScreen";
import { TabBar } from "@/components/TabBar";

const tabScreens: Record<string, React.ReactNode> = {
  home: <HomeScreen />,
  controls: <ControlsScreen />,
  device: <DeviceInfoScreen />,
};

const Index = () => {
  const [tab, setTab] = useState<"home" | "controls" | "device">("home");

  return (
    <AcStateProvider>
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-between relative">
        <header className="w-full py-4 bg-white shadow-sm border-b border-blue-100 text-center fixed top-0 left-0 z-40">
          <span className="text-lg font-bold text-blue-700 tracking-wide">
            Smart AC Remote Simulator
          </span>
        </header>
        <main className="w-full pt-16 pb-20 flex-1 flex flex-col">
          {tabScreens[tab]}
        </main>
        <TabBar current={tab} onChange={setTab} />
      </div>
    </AcStateProvider>
  );
};

export default Index;