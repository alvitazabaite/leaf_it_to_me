import { LoginForm } from '@/components/LoginForm/LoginForm.tsx';

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark-green font-bold">
            <LoginForm />
            <div className="text-sm md:text-base">
                Don’t have an account?{' '}
                <a href="/register" className="text-blue-500 hover:underline">
                    Register
                </a>
            </div>
        </div>
    );
}
