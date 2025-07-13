import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInput } from '@/components/LoginForm/types.ts';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { clsx } from 'clsx';
import { useAuth } from '@/context/AuthContext.ts';
import { toast } from 'sonner';

export function LoginForm() {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<LoginFormInput>();

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
        <form className="flex flex-col w-72 gap-4 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                className="bg-white"
                placeholder={'Email'}
                {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
            />
            <Input
                className="bg-white text-lg"
                type={'password'}
                placeholder={'Password'}
                {...register('password', { required: true })}
            />
            <div className="flex justify-center">
                <Button
                    className={clsx('text-lg text-yellowish-white', isValid && 'cursor-pointer w-1/3')}
                    disabled={!isValid}
                    type="submit"
                >
                    Login
                </Button>
            </div>
        </form>
    );
}
