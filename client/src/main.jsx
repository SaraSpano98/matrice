import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ApiProvider } from "./providers/Api.jsx";
import { SettingsProvider } from "./providers/Settings.jsx";

import store from "./store/index.js";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <ReduxProvider store={store}>
        <SettingsProvider>
            <ApiProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ApiProvider>
        </SettingsProvider>
    </ReduxProvider>
);



