import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "./i18n";
import "react-toastify/dist/ReactToastify.css";
import PublicLayout from "./layout/PublicLayout";

const App = () => {
    const { darkMode } = useSelector((state) => state.settings);

    return (
        <>
            <Routes>
                <Route path="/" element={<PublicLayout />} />
            </Routes>

            <ToastContainer theme={darkMode ? "dark" : "light"} />
        </>
    );
};

export default App;



