import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
