import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/index.jsx";

import { CadastrarConta } from "../Pages/CadastrarConta/index.jsx";
import { EntrarConta } from "../Pages/EntrarConta/index.jsx";

import { SimplifiedDogCareAdmin } from  "../Pages/Admin/index.jsx";
import { DogCareAdminPage } from  "../Pages/DogCareAdminPage/index.jsx";


export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="EntrarConta" element={<EntrarConta />} />
      <Route path="CadastrarConta" element={<CadastrarConta />} />
      <Route path="SimplifiedDogCareAdmin" element={<SimplifiedDogCareAdmin />} />
      <Route path="SimplifiedDogCareAdmin/DogCareAdminPage" element={<DogCareAdminPage />} />


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
