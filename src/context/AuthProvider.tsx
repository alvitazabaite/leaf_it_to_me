import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { randomAlphaNumeric, userData } from "@/lib/utils.ts";
import * as React from "react";
import { LoginType } from "@/context/types.ts";
import { AuthContext } from "./AuthContext.ts";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedData = (() => {
    const data = JSON.parse(localStorage.getItem("user") || "{}");
    if (data?.email && data?.token) {
      return data;
    } else {
      return null;
    }
  })();
  const [user, setUser] = useState<string | null>(storedData?.email || null);
  const [token, setToken] = useState(storedData?.token || null);
  const navigate = useNavigate();

  const login = (data: LoginType) => {
    if (data.email !== userData.email || data.password !== userData.password) {
      return false;
    }
    const t = randomAlphaNumeric(50);
    setTimeout(() => {
      const obj = { ...data, token: t };
      setUser(data.email);
      setToken(t);
      localStorage.setItem("user", JSON.stringify(obj));
      navigate("/");
    }, 1000);
    return true;
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
