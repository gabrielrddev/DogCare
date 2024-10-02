import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/index.jsx";

import { CadastrarConta } from "../Pages/CadastrarConta/index.jsx";
import { EntrarConta } from "../Pages/EntrarConta/index.jsx";

export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="EntrarConta" element={<EntrarConta />} />
      <Route path="CadastrarConta" element={<CadastrarConta />} />

      {/* Rotas protegidas
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      /> */}
    </Routes>
  );
}
