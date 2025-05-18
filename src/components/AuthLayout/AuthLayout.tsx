import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.ts";

export function AuthLayout() {
  const auth = useAuth();
  if (!auth.token) return <Navigate to="/login" />;
  return <Outlet />;
}
