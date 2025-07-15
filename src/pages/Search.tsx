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
        <div className="flex flex-col h-[890px] self-stretch relative">
            <div
                className="absolute inset-0 -z-10 w-full"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(6,57,31,0.8) 0%, rgba(6,57,31,0.8) 100%), url(${leafs})`,
                    backgroundColor: 'lightgray',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'hard-light, normal',
                    backgroundSize: 'cover',
                }}
            />
            <div className="text-center flex flex-col items-center px-[26.6875rem] my-auto mx-0">
                <div className="text-white text-4xl font-bold text-center mb-[9.92px]">Hello, Plant Lover!</div>
                <div className="text-white text-xl font-normal leading-normal mb-[48px]">
                    Search for plants by name, explore thousands of species.
                </div>
                <SearchForm plants={plants} />
            </div>
        </div>
    );
}
