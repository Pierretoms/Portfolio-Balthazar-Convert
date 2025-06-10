import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import home from "./pages/home/home.jsx";
import signIn from "./pages/signIn/signIn.jsx";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<home.jsx />} />
        <Route path="/signin" element={<signIn />} />
    </Routes>
  </BrowserRouter>
);
