import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { AdminCalendar } from "../Pages/AdminCalendar";
import { AdminHistory } from "../Pages/AdminHistory";
import { FixEmail } from "../Pages/FixEmail";
import { AdminHistoryClient } from "../Pages/AdminHistoryClient";

export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="AdminCalendar" element={<AdminCalendar />} />
      <Route path="AdminCalendar/AdminHistory" element={<AdminHistory />} />
      <Route path="/Login/FixEmail" element={<FixEmail />} />
      <Route
        path="/AdminCalendar/AdminHistoryClient"
        element={<AdminHistoryClient />}
      />
      <Route
        path="AdminCalendar/AdminHistory/AdminHistoryClient"
        element={<AdminHistoryClient />}
      />
      <Route path="/Login/Register" element={<Register />} />
      <Route path="/Register/Login" element={<Login />} />
      <Route path="/Register/Login/FixEmail" element={<FixEmail />} />
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
