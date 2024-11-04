import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { AdminCalendar } from "../Pages/AdminCalendar";
import { AdminHistory } from "../Pages/AdminHistory";
import { FixEmail } from "../Pages/FixEmail";
import { FixEmail2 } from "../Pages/FixEmail2";

function LoginLayout() {
  return (
    <div>
      {/* Elementos de layout comuns para as rotas de login */}
      <Outlet />
    </div>
  );
}

export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="Register" element={<Register />} />

      {/* Layout com Outlet para rotas de Login */}
      <Route path="Login" element={<LoginLayout />}>
        <Route index element={<Login />} />
        <Route path="FixEmail" element={<FixEmail />} />
        <Route path="FixEmail/FixEmail2" element={<FixEmail2 />} />
      </Route>

      {/* Layout com Outlet para rotas administrativas */}
      <Route path="AdminCalendar" element={<AdminCalendar />}>
        <Route path="AdminHistory" element={<AdminHistory />} />
      </Route>
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