import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/index.jsx';

import { CadastrarPet } from '../Pages/CadastroPet/index.jsx';



export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="CadastrarPet" element={<CadastrarPet />} />
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
