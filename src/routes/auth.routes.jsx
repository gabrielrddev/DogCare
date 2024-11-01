import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AdminCalendar } from "../pages/AdminCalendar";
import { AdminHistory } from "../pages/AdminHistory";

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