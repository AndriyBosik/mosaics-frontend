import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/*" element={<LayoutRoutes />} />
        </Routes>
    );
}

export default AppRoutes;