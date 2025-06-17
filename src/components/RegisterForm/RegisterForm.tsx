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
        <form className="flex flex-col w-72 gap-4 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder={'Email'}
                {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
            />
            <Input placeholder={'Password'} {...register('password', { required: true, minLength: 5 })} />
            <Input placeholder="Confirm Password" {...register('confirmPassword', { required: true })} />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="flex justify-center">
                <Button className={clsx(isValid && 'cursor-pointer w-1/3')} disabled={!isValid} type="submit">
                    Register
                </Button>
            </div>
        </form>
    );
}
