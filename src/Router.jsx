import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";

export const Router = memo(() => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Route>
    </Routes>
  );
});
