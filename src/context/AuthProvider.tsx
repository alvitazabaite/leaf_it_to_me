import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { randomAlphaNumeric } from '@/lib/utils.ts';
import { LoginType } from '@/context/types.ts';
import { AuthContext } from './AuthContext.ts';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const storedData = (() => {
        const data = JSON.parse(localStorage.getItem('user') || '{}');
        if (data?.email && data?.token) {
            return data;
        } else {
            return null;
        }
    })();
    const [user, setUser] = useState<string | null>(storedData?.email || null);
    const [token, setToken] = useState(storedData?.token || null);
    const navigate = useNavigate();

    const registerUser = (data: LoginType): string | null => {
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const matchedUser = users.find(
            (user: LoginType) => user.email === data.email && user.password === data.password,
        );
        if (matchedUser) {
            return 'User already exists. Please login.';
        }
        localStorage.setItem('registeredUsers', JSON.stringify([...users, data]));
        return null;
    };

    const login = (data: LoginType) => {
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const matchedUser = users.find(
            (user: LoginType) => user.email === data.email && user.password === data.password,
        );
        if (!matchedUser) {
            return 'Invalid email or password';
        }
        const t = randomAlphaNumeric(50);
        setTimeout(() => {
            setUser(data.email);
            setToken(t);
            localStorage.setItem('user', JSON.stringify({ ...matchedUser, token: t }));
            navigate('/home');
        }, 1000);
        return null;
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
    };

    return <AuthContext.Provider value={{ user, token, login, logout, registerUser }}>{children}</AuthContext.Provider>;
}
