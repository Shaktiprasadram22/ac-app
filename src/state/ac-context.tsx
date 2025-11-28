import React, { createContext, useContext, useState, ReactNode } from "react";

type AcMode = "Cool" | "Dry" | "Fan";
type FanSpeed = "Low" | "Medium" | "High";
type WifiStatus = "Connected" | "Disconnected";

interface AcState {
  power: boolean;
  temperature: number;
  mode: AcMode;
  fanSpeed: FanSpeed;
  swing: boolean;
  timer: string;
  wifiStatus: WifiStatus;
  lastCommand: string;
}

interface AcContextType extends AcState {
  setPower: (on: boolean) => void;
  setTemperature: (temp: number) => void;
  setMode: (mode: AcMode) => void;
  setFanSpeed: (speed: FanSpeed) => void;
  setSwing: (on: boolean) => void;
  setTimer: (timer: string) => void;
  setWifiStatus: (status: WifiStatus) => void;
  setLastCommand: (cmd: string) => void;
}

const defaultState: AcState = {
  power: false,
  temperature: 24,
  mode: "Cool",
  fanSpeed: "Medium",
  swing: false,
  timer: "Off",
  wifiStatus: "Connected",
  lastCommand: "None",
};

const AcContext = createContext<AcContextType | undefined>(undefined);

export const AcStateProvider = ({ children }: { children: ReactNode }) => {
  const [power, setPower] = useState(defaultState.power);
  const [temperature, setTemperature] = useState(defaultState.temperature);
  const [mode, setMode] = useState<AcMode>(defaultState.mode);
  const [fanSpeed, setFanSpeed] = useState<FanSpeed>(defaultState.fanSpeed);
  const [swing, setSwing] = useState(defaultState.swing);
  const [timer, setTimer] = useState(defaultState.timer);
  const [wifiStatus, setWifiStatus] = useState<WifiStatus>(defaultState.wifiStatus);
  const [lastCommand, setLastCommand] = useState(defaultState.lastCommand);

  const contextValue: AcContextType = {
    power,
    temperature,
    mode,
    fanSpeed,
    swing,
    timer,
    wifiStatus,
    lastCommand,
    setPower: (on) => {
      setPower(on);
      setLastCommand(on ? "Power ON" : "Power OFF");
    },
    setTemperature: (temp) => {
      setTemperature(temp);
      setLastCommand(`Set Temp ${temp}°C`);
    },
    setMode: (m) => {
      setMode(m);
      setLastCommand(`Mode: ${m}`);
    },
    setFanSpeed: (s) => {
      setFanSpeed(s);
      setLastCommand(`Fan Speed: ${s}`);
    },
    setSwing: (on) => {
      setSwing(on);
      setLastCommand(on ? "Swing ON" : "Swing OFF");
    },
    setTimer: (t) => {
      setTimer(t);
      setLastCommand(`Timer: ${t}`);
    },
    setWifiStatus: (s) => setWifiStatus(s),
    setLastCommand: (cmd) => setLastCommand(cmd),
  };

  return <AcContext.Provider value={contextValue}>{children}</AcContext.Provider>;
};

export const useAcState = () => {
  const ctx = useContext(AcContext);
  if (!ctx) throw new Error("useAcState must be used within AcStateProvider");
  return ctx;
};