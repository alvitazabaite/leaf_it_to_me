import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import Header from "@/components/Header/Header.tsx";
import Results from "@/pages/Results.tsx";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout.tsx";
import Login from "@/pages/Login.tsx";

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <div className="pt-20">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<AuthLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
