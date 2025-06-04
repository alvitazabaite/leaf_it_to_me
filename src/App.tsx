import { Routes, Route, Navigate } from 'react-router-dom';
import Search from './pages/Search.tsx';
import Results from '@/pages/Results.tsx';
import { AuthLayout } from '@/components/AuthLayout/AuthLayout.tsx';
import Login from '@/pages/Login.tsx';
import PageLayout from '@/components/PageLayout/PageLayout.tsx';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<AuthLayout />}>
                    <Route element={<PageLayout />}>
                        <Route path="/search" element={<Search />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}
