import { useContext } from "react";
import { SettingsContext } from "../providers/Settings";

export const useSettings = () => useContext(SettingsContext);


