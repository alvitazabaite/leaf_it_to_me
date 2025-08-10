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
        <div className="flex flex-col items-start min-h-screen w-full relative pt-[24px]">
            <div className="flex flex-col md:flex-row px-[24px] md:px-[153px] items-start gap-[24px] md:gap-[80px] mx-auto">
                {plantName && plantResponse && (
                    <>
                        <div className="md:hidden w-[360px] h-[270px] aspect-[4/3] mx-auto">
                            <img
                                src={plantResponse['Images thumb'] || noImage}
                                alt={plantResponse['Images title'] || 'Plant image'}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="hidden md:flex flex-col md:w-[497px] md:pt-[40px] md:items-start md:gap-[10px] shrink-0">
                            <img
                                src={plantResponse['Images thumb'] || noImage}
                                alt={plantResponse['Images title'] || 'Plant image'}
                                className="md:h-[373px] md:aspect-[493/370] md:object-contain"
                            />
                        </div>
                        <div className="flex flex-col mt-[24px] md:mt-[40px] md:items-start items-center md:gap-[40px] md:w-[518px] self-stretch">
                            <PlantCard plantName={plantName} plantResponse={plantResponse} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
