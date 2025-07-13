import { LoginForm } from '@/components/LoginForm/LoginForm.tsx';

export default function Login() {
    return (
        <div className="text-lg min-h-screen flex flex-col items-center justify-center bg-dark-green">
            <LoginForm />
            <div className="text-base">
                Don’t have an account?{' '}
                <a href="/register" className="text-blue-600">
                    Register
                </a>
            </div>
        </div>
    );
}
