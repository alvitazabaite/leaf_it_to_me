import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { useEffect, useState } from 'react';
import { PlantCard } from '@/components/PlantCard/PlantCard.tsx';
import { PlantResponseType } from '@/pages/types.ts';
import { getPlantByName } from '@/api/supabase/plantsApi.ts';
import noImage from '@/assets/no_image_available.png';
import { toast } from 'sonner';

export default function Results() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [plantResponse, setPlantResponse] = useState<PlantResponseType | null>(null);
    const [plantName, setPlantName] = useState<string | null>(null);
    const name = searchParams.get('plant');

    const handleClick = () => {
        navigate('/search');
    };

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
        <div className="mt-10">
            {plantName && plantResponse && (
                <div className="pl-5 pr-5 flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-10 max-w-6xl">
                        {plantResponse['Images thumb'] ? (
                            <img
                                src={plantResponse['Images thumb']}
                                alt={plantResponse['Images title'] || 'Plant image'}
                            />
                        ) : (
                            <img src={noImage} alt="No image" className="w-32 h-32" />
                        )}
                        <PlantCard plantName={plantName} plantResponse={plantResponse} />
                    </div>
                    <Button className="mt-5" onClick={handleClick}>
                        Go back
                    </Button>
                </div>
            )}
        </div>
    );
}
