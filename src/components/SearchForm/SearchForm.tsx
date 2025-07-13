import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button.tsx';
import { SearchCombobox } from '@/components/SearchCombobox/SearchCombobox.tsx';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { SearchFormProps } from '@/components/SearchForm/types.ts';
import { Search } from 'lucide-react';

export function SearchForm({ plants }: SearchFormProps) {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm<{ plantName: string }>({
        defaultValues: { plantName: '' },
    });

    const onSubmit = async (data: { plantName: string }) => {
        const params = new URLSearchParams();
        params.set('plant', data.plantName);
        navigate('/results?' + params.toString());
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row items-center">
                <Controller
                    control={control}
                    name={'plantName'}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <SearchCombobox plants={plants} plantName={value} onChange={onChange} />
                    )}
                />
                <Button className={clsx(isValid && 'cursor-pointer')} disabled={!isValid} type="submit">
                    <Search width={64} height={64} className="text-white " />
                </Button>
            </div>
        </form>
    );
}
