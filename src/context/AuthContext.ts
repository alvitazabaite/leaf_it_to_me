import { createContext, useContext } from 'react';
import { ProviderProps } from './types';

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthContext = createContext<ProviderProps>({
    user: null,
    token: null,
    login: () => null,
    logout: () => {},
    registerUser: () => null,
});
