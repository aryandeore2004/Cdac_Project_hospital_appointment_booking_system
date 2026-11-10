import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DEV_BYPASS = true; // set to false once Login works

export default function ProtectedRoute({ role }) {
  const { user } = useAuth();

  if (DEV_BYPASS) return <Outlet />;
  if (!user || user.role !== role) return <Navigate to="/login" replace />;
  return <Outlet />;
}