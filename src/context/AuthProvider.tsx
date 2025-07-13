import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { LoginType } from '@/context/types.ts';
import { AuthContext } from './AuthContext.ts';
import { supabase } from '@/api/supabase/client.ts';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                setUser(session.user.email || null);
                setToken(session.access_token || null);
            }
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user?.email || null);
            setToken(session?.access_token || null);
        });
        return () => {
            subscription.unsubscribe();
        };
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
            navigate('/search');
            return null;
        }
        return 'Login failed. Please try again.';
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setToken(null);
    };

    return loading ? null : (
        <AuthContext.Provider value={{ user, token, login, logout, registerUser }}>{children}</AuthContext.Provider>
    );
}
