import { Routes, Route, Navigate } from 'react-router-dom';
import Search from './pages/Search.tsx';
import Results from '@/pages/Results.tsx';
import { AuthLayout } from '@/components/AuthLayout/AuthLayout.tsx';
import Login from '@/pages/Login.tsx';
import PageLayout from '@/components/PageLayout/PageLayout.tsx';
import Register from '@/pages/Register.tsx';

export default function App() {
    return (
        <div className="w-full mx-auto">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<AuthLayout />}>
                    <Route element={<PageLayout />}>
                        <Route path="/search" element={<Search />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="*" element={<Navigate to="/search" />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}
