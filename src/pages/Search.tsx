import { SearchForm } from '@/components/SearchForm/SearchForm.tsx';
import { getPlantsNames } from '@/api/supabase/plantsApi.ts';
import { useEffect, useState } from 'react';
import { PlantOption } from '@/pages/types.ts';
import { toast } from 'sonner';
import leafs from '@/assets/leafs.png';

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
        <div className="relative h-[49.875rem]">
            <img src={leafs} alt="leafs" className="absolute w-full h-full object-cover -z-10" />
            <div className="flex flex-col items-center pt-[8.75rem] px-[26.6875rem]">
                <div className="text-white text-4xl font-bold text-center mb-[0.62rem]">Hello, Plant Lover!</div>
                <div className="text-white text-xl font-normal">
                    Search for plants by name, explore thousands of species.
                </div>
                <div className="mt-[3rem]">
                    <SearchForm plants={plants} />
                </div>
            </div>
        </div>
    );
}
