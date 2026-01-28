import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import "./i18n";
import { ToastContainer } from "react-toastify";

const App = () => {
    const {darkMode} = useSelector((state) => state.settings);
    return (
        <>
            <Routes>
                <Route path="/" element ={<Public/>}>
                </Route>
            </Routes>
        
            <ToastContainer theme={darkMode ? "dark" : "light"} />
        </>
    );
};

export default App;


