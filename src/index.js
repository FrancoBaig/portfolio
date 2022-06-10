import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App";
import EducationDetails from "./components/EducationDetails";
import DataProvider from "./services/DataProvider";
var contentful = require("contentful");

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
