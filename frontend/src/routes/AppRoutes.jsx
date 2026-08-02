import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SubmitTestimonial from "../pages/SubmitTestimonial";
import Dashboard from "../pages/Dashboard";
import Wall from "../pages/PublicWall";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SubmitTestimonial />} />
      <Route path="/wall" element={<Wall />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
