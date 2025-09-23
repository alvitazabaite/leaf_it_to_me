import { Controller, useForm } from 'react-hook-form';
import { SearchCombobox } from '@/components/SearchCombobox/SearchCombobox.tsx';
import { useNavigate } from 'react-router-dom';
import { SearchFormProps } from '@/components/SearchForm/types.ts';
import { toast } from 'sonner';

export function SearchForm({ plants }: SearchFormProps) {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm<{ plantName: string }>({
        defaultValues: { plantName: '' },
    });

    const onSubmit = async (data: { plantName: string }) => {
        const params = new URLSearchParams();
        params.set('plant', data.plantName);
        navigate('/results?' + params.toString());
    };

    const submitForm = handleSubmit(onSubmit);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name={'plantName'}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <SearchCombobox
                        plants={plants}
                        plantName={value}
                        onChange={currentValue => {
                            onChange(currentValue);
                            submitForm().catch(() => {
                                toast.error('Failed to submit the plant. Please try again.', {
                                    style: { color: 'red' },
                                });
                            });
                        }}
                    />
                )}
            />
        </form>
    );
}
