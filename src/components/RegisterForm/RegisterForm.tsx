import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RegisterFormInput } from '@/components/RegisterForm/types.ts';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext.ts';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

export function RegisterForm() {
    const { registerUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<RegisterFormInput>();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);

    const onSubmit: SubmitHandler<RegisterFormInput> = async data => {
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match. Try again.');
            return;
        }
        const error = await registerUser({ email: data.email, password: data.password });
        if (error) {
            toast.error(error, {
                style: {
                    color: 'red',
                },
            });
        } else {
            toast.success('Registration successful. Please login.', {
                style: {
                    color: 'green',
                },
            });
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label className="block text-light-sand text-sm" htmlFor="email">
                    Email
                </label>
                <Input
                    id="email"
                    className="bg-white text-sm md:text-base w-[250px] md:w-[350px]"
                    placeholder={'Enter email address'}
                    {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                />
            </div>
            <div className="flex flex-col">
                <label className="block text-light-sand text-sm" htmlFor="password">
                    Password
                </label>
                <div className="relative w-[250px] md:w-[350px]">
                    <Input
                        id="password"
                        className="bg-white text-sm md:text-base"
                        type={showPassword ? 'text' : 'password'}
                        placeholder={'Password'}
                        {...register('password', { required: true, minLength: 5 })}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="absolute top-3 md:top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <EyeOff className="w-3 h-3 md:w-5 md:h-5" />
                        ) : (
                            <Eye className="w-3 h-3 md:w-5 md:h-5" />
                        )}
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="block text-light-sand text-sm" htmlFor="password-confirm">
                    Confirm password
                </label>
                <div className="relative w-[250px] md:w-[350px]">
                    <Input
                        id="password-confirm"
                        className="bg-white text-sm md:text-base"
                        type={showSecondPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...register('confirmPassword', { required: true })}
                    />
                    <button
                        type="button"
                        onClick={() => setShowSecondPassword(prev => !prev)}
                        className="absolute top-3 md:top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        {showSecondPassword ? (
                            <EyeOff className="w-3 h-3 md:w-5 md:h-5" />
                        ) : (
                            <Eye className="w-3 h-3 md:w-5 md:h-5" />
                        )}
                    </button>
                </div>
            </div>
            {error && <p className="text-red-500 text-lg text-center">{error}</p>}
            <div className="flex justify-center">
                <Button
                    className={clsx(
                        'text-base md:text-lg font-bold',
                        isValid
                            ? 'cursor-pointer text-dark-green bg-light-sand hover:bg-dark-gray-2'
                            : 'cursor-not-allowed text-dark-green bg-dark-gray-1',
                    )}
                    disabled={!isValid}
                    type="submit"
                >
                    Register
                </Button>
            </div>
        </form>
    );
}
