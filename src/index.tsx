import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeStats from "./components/pokeStats";
import reportWebVitals from "./reportWebVitals";
import AppCopy from "./App test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<AppCopy />} />
        <Route path="/pokemon/:id" element={<PokeStats />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
