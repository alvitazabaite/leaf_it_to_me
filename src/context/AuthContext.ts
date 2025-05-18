import { createContext, useContext } from "react";
import { ProviderProps } from "./types";

export const AuthContext = createContext<ProviderProps>({
  user: null,
  token: null,
  login: () => true,
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};
