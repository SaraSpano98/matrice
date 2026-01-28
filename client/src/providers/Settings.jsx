import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../store/slices/settingsSlice";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.settings.darkMode);

    const toggleDarkMode = (isActive) => {
        dispatch(setDarkMode(isActive));
    };

    useEffect(() => {
        if (darkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [darkMode]);

    return (
        <SettingsContext.Provider value={{ settings: { darkMode }, toggleDarkMode }}>
            {children}
        </SettingsContext.Provider>
    );
}



