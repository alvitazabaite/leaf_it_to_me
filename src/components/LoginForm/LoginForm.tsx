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
        <form className="flex flex-col gap-4 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                className="text-sm md:text-base w-[250px] md:w-[350px] bg-white"
                placeholder={'Email'}
                {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
            />
            <Input
                className="text-sm md:text-base w-[250px] md:w-[350px] bg-white"
                type={'password'}
                placeholder={'Password'}
                {...register('password', { required: true })}
            />
            <div className="flex justify-center">
                <Button
                    className={clsx(
                        'text-base md:text-lg text-black font-bold',
                        isValid && 'cursor-pointer text-white',
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
