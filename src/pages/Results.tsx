import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PlantCard } from '@/components/PlantCard/PlantCard.tsx';
import { PlantResponseType } from '@/pages/types.ts';
import { getPlantByName } from '@/api/supabase/plantsApi.ts';
import noImage from '@/assets/no_image_available.png';
import { toast } from 'sonner';

export default function Results() {
    const [searchParams] = useSearchParams();
    const [plantResponse, setPlantResponse] = useState<PlantResponseType | null>(null);
    const [plantName, setPlantName] = useState<string | null>(null);
    const name = searchParams.get('plant');

    useEffect(() => {
        if (!name) return;
        const fetchData = async () => {
            const { status, response } = await getPlantByName(name);
            if (status === 200 && typeof response === 'object') {
                setPlantResponse(response);
                setPlantName(name);
            } else {
                toast.error('Failed to load data of the plant. Please refresh the page.', {
                    style: {
                        color: 'red',
                    },
                });
            }
        };
        fetchData();
    }, [name]);

    return (
        <div className="flex flex-col min-h-screen w-full relative mt-[24px]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-[24px] md:gap-[80px] mx-auto my-auto max-w-[1200px] w-full">
                {plantName && plantResponse && (
                    <>
                        <div className="md:hidden flex w-[360px] aspect-[4/3] mx-auto items-center justify-center">
                            <img
                                src={plantResponse['Images thumb'] || noImage}
                                alt={plantResponse['Images title'] || 'Plant image'}
                                className="object-contain"
                            />
                        </div>
                        <div className="hidden md:flex flex-col w-[497px] pt-[40px] items-start gap-[10px] shrink-0">
                            <img
                                src={plantResponse['Images thumb'] || noImage}
                                alt={plantResponse['Images title'] || 'Plant image'}
                                className="h-[373px] aspect-[493/370] object-contain"
                            />
                        </div>
                        <div className="flex flex-col mt-[24px] md:mt-[40px] items-center md:items-start gap-[40px] w-[304px] md:w-[518px]">
                            <PlantCard plantName={plantName} plantResponse={plantResponse} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
