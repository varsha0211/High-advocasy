import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SubmitTestimonial from "../pages/SubmitTestimonial";
import Dashboard from "../pages/Dashboard";
import Wall from "../pages/PublicWall";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/submit" element={<SubmitTestimonial />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/wall" element={<Wall />}></Route>
      <Route path="/" element={<Navigate to="/submit" replace />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
