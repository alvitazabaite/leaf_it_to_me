import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInput } from '@/components/LoginForm/types.ts';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { clsx } from 'clsx';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext.ts';

export function LoginForm() {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<LoginFormInput>();
    const [error, setError] = useState<string | null>(null);

    const onSubmit: SubmitHandler<LoginFormInput> = async data => {
        const error = await login(data);
        if (error) {
            setError(error);
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
            <Input placeholder={'Password'} {...register('password', { required: true })} />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="flex justify-center">
                <Button className={clsx(isValid && 'cursor-pointer w-1/3')} disabled={!isValid} type="submit">
                    Login
                </Button>
            </div>
        </form>
    );
}
