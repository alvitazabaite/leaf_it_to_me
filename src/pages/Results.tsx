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
        <div className="flex flex-col items-start min-h-screen w-full relative pt-[24px] pb-[60px]">
            <div className="flex flex-col md:flex-row px-[24px] md:px-[153px] items-start gap-[24px] md:gap-[80px] mx-auto">
                {plantName && plantResponse && (
                    <>
                        <div className="flex flex-col w-[497px] pt-[40px] items-start gap-[10px] shrink-0">
                            {plantResponse['Images thumb'] ? (
                                <img
                                    src={plantResponse['Images thumb']}
                                    alt={plantResponse['Images title'] || 'Plant image'}
                                    className="w-[497px] h-[373px] aspect-[493/370] rounded-[12px] object-contain bg-white"
                                />
                            ) : (
                                <img
                                    src={noImage}
                                    alt="No image"
                                    className="w-[497px] h-[373px] aspect-[493/370] rounded-[12px] object-contain bg-white"
                                />
                            )}
                        </div>
                        <div className="flex flex-col pt-[40px] items-start gap-[40px] w-[518px]">
                            <PlantCard plantName={plantName} plantResponse={plantResponse} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
