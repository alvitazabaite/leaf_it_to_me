import Header from '@/components/Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer/Footer.tsx';

export default function PageLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
