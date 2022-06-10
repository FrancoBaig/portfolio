import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App";
import EducationDetails from "./pages/EducationDetails/EducationDetails";
import DataProvider from "./services/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DataProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/education/:title"
                    element={<EducationDetails />}
                />
                <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
        </BrowserRouter>
    </DataProvider>
);
