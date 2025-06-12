import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { LoginType } from '@/context/types.ts';
import { AuthContext } from './AuthContext.ts';
import { supabase } from '@/api/supabase.ts';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user?.email || null);
            setToken(session?.access_token || null);
        });
        data.subscription.unsubscribe();
    }, []);

    const registerUser = async (userData: LoginType) => {
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: userData.email,
            password: userData.password,
        });
        if (!signInError) {
            return 'User already exists. Please login.';
        }

        const { error: signUpError } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password,
        });

        if (signUpError) {
            return `Registration failed. Please try again.`;
        }
        return null;
    };

    const login = async (userData: LoginType) => {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
            email: userData.email,
            password: userData.password,
        });

        if (signInError) {
            return `Invalid email or password. Please try again.`;
        }
        const session = data.session;
        if (data.session && data.user) {
            setUser(userData.email);
            setToken(session.access_token);
            navigate('/home');
            return null;
        }
        return 'Login failed. Please try again.';
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setToken(null);
    };

    return <AuthContext.Provider value={{ user, token, login, logout, registerUser }}>{children}</AuthContext.Provider>;
}
