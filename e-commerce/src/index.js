import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Produto } from "./pages/produto";
import { Cadastrar } from "./pages/Cadastro";
import { DefaultTemplate } from "./pages/_Templates";
import ProdutoProvider from "./Contexto/Produto";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProdutoProvider>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />}></Route>
          <Route path="/cadastro" element={<Cadastrar />} />
        </Routes>
      </DefaultTemplate>
    </ProdutoProvider>
  </BrowserRouter>
);
reportWebVitals();
