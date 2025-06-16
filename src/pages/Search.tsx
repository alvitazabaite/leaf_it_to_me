import { SearchForm } from '@/components/SearchForm/SearchForm.tsx';
import { getPlantsNames } from '@/api/supabase/plantsApi.ts';
import { useEffect, useState } from 'react';
import { PlantOption } from '@/pages/types.ts';

export default function Search() {
    const [plants, setPlants] = useState<PlantOption[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { status, response } = await getPlantsNames();
            if (status === 200 && response) {
                const plantsData = response.map(name => ({
                    value: name,
                    label: name,
                }));
                setPlants(plantsData);
            } else {
                console.log('NOTIFICATION NEEDED');
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
