import { LoginForm } from '@/components/LoginForm/LoginForm.tsx';

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark-green">
            <LoginForm />
            <div className="text-sm md:text-base font-bold text-light-sand">
                Don’t have an account?{' '}
                <a href="/register" className="text-blue-300 hover:underline">
                    Register
                </a>
            </div>
        </div>
    );
}
