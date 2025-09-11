import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RegisterFormInput } from '@/components/RegisterForm/types.ts';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext.ts';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function RegisterForm() {
    const { registerUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<RegisterFormInput>();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

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
        <form className="flex flex-col gap-4 font-bold" onSubmit={handleSubmit(onSubmit)}>
            <Input
                className="bg-white text-sm md:text-base w-[250px] md:w-[350px]"
                placeholder={'Email'}
                {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
            />
            <Input
                className="bg-white text-sm md:text-base w-[250px] md:w-[350px]"
                type={'password'}
                placeholder={'Password'}
                {...register('password', { required: true, minLength: 5 })}
            />
            <Input
                className="bg-white text-sm md:text-base w-[250px] md:w-[350px]"
                type={'password'}
                placeholder="Confirm Password"
                {...register('confirmPassword', { required: true })}
            />
            {error && <p className="text-red-500 text-lg text-center">{error}</p>}
            <div className="flex justify-center">
                <Button
                    className={clsx(
                        'text-base md:text-lg font-bold',
                        isValid
                            ? 'cursor-pointer text-white bg-dark-gray-3 hover:bg-dark-gray-2'
                            : 'cursor-not-allowed text-black bg-dark-gray-1',
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
