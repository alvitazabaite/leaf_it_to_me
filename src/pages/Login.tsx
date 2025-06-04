import { LoginForm } from '@/components/LoginForm/LoginForm.tsx';

export default function Login() {
    return (
        <div className="text-3xl min-h-screen flex flex-col items-center justify-center">
            <LoginForm />
            <div className="text-sm">
                Don’t have an account?{' '}
                <a href="/register" className="text-blue-600">
                    Register
                </a>
            </div>
        </div>
    );
}
