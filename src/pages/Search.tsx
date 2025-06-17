import { SearchForm } from '@/components/SearchForm/SearchForm.tsx';
import { getPlantsNames } from '@/api/supabase/plantsApi.ts';
import { useEffect, useState } from 'react';
import { PlantOption } from '@/pages/types.ts';
import { toast } from 'sonner';

export default function Search() {
    const [plants, setPlants] = useState<PlantOption[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { status, response } = await getPlantsNames();
            if (status === 200 && Array.isArray(response)) {
                const plantsData = response.map(name => ({
                    value: name,
                    label: name,
                }));
                setPlants(plantsData);
            } else {
                toast.error('Failed to load data of the plant. Please refresh the page.', {
                    style: {
                        color: 'red',
                    },
                });
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <SearchForm plants={plants} />
        </div>
    );
}
