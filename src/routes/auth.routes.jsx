import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/index.jsx";
import { Login } from "../pages/Login/index.jsx";
import { Register } from "../pages/Register/index.jsx";
import { AdminCalendar } from "../pages/AdminCalendar/index.jsx";
import { AdminHistory } from "../pages/AdminHistory/index.jsx";

export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="AdminCalendar" element={<AdminCalendar />} />
      <Route path="AdminCalendar/AdminHistory" element={<AdminHistory />} />
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