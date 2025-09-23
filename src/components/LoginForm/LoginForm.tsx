import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInput } from '@/components/LoginForm/types.ts';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { clsx } from 'clsx';
import { useAuth } from '@/context/AuthContext.ts';
import { toast } from 'sonner';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function LoginForm() {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<LoginFormInput>();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit: SubmitHandler<LoginFormInput> = async data => {
        const error = await login(data);
        if (error) {
            toast.error(error, {
                style: {
                    color: 'red',
                },
            });
        }
    };

    return (
        <form className="flex flex-col gap-6 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label className="block text-light-sand text-sm" htmlFor="email">
                    Email
                </label>
                <Input
                    id="email"
                    className="text-sm md:text-base w-[250px] md:w-[350px] bg-white"
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
                        className="text-sm md:text-base bg-white"
                        type={showPassword ? 'text' : 'password'}
                        placeholder={'Enter password'}
                        {...register('password', { required: true })}
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
                    Login
                </Button>
            </div>
        </form>
    );
}
