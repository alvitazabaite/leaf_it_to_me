import Header from '@/components/Header/Header.tsx';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.ts';

export default function PageLayout() {
    const auth = useAuth();
    if (!auth.token) return <Navigate to="/login" />;
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
