import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlantCardProps } from '@/components/PlantCard/types.ts';
import { PlantResponseType, PlantTypeWithImages } from '@/pages/types.ts';
import { Divider } from '@/components/Divider/Divider.tsx';
import waterIcon from '@/assets/water_vector.png';
import lightIcon from '@/assets/light_vector.png';
import soilIcon from '@/assets/soil_vector.png';
import heightIcon from '@/assets/height_vector.png';
import layerIcon from '@/assets/layer_vector.png';

export function PlantCard({ plantName, plantResponse }: PlantCardProps) {
    const orderedLabels: (keyof PlantResponseType)[] = [
        'Water requirement',
        'Light requirement',
        'Soil type',
        'Height',
        'Layer',
    ];

    const labelImages: Record<(keyof PlantTypeWithImages)[number], string> = {
        'Water requirement': waterIcon,
        'Light requirement': lightIcon,
        'Soil type': soilIcon,
        'Height': heightIcon,
        'Layer': layerIcon,
    };

    const details = orderedLabels
        .map(label => [label, plantResponse[label]])
        .filter(([, value]) => value !== undefined && value !== null);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-black font-nunito text-5xl font-bold leading-normal">{plantName}</CardTitle>
            </CardHeader>

            <CardDescription className="self-stretch text-dark-gray-3 font-nunito text-3xl font-normal leading-normal mt-1 mb-[40px]">
                {plantResponse['Scientific name']}
            </CardDescription>
            <Divider />

            <CardContent>
                <div className="text-black font-nunito text-base font-normal leading-normal">
                    {details.map(([label, value], i) => (
                        <React.Fragment key={label}>
                            <div className="grid items-center w-[518px] grid-cols-[214px_74px_1fr]">
                                <div className="flex items-center gap-[15px]">
                                    <img
                                        src={labelImages[label]}
                                        alt={`${label} icon`}
                                        className="w-[22px] h-[22px] flex-shrink-0 object-contain"
                                    />
                                    <div>{label}</div>
                                </div>
                                <div />
                                <div>{value}</div>
                            </div>
                            {i !== details.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}

                    <Divider />
                    <div className="text-black text-base font-nunito leading-normal font-normal">
                        <div className="font-bold mb-4">Description:</div>
                        <div className="leading-[26px]">{plantResponse['Description']}</div>
                        <Divider />
                        <div className="mb-[60px]">
                            Read more about {plantResponse['Name']} on{' '}
                            <a
                                href={plantResponse['Wikipedia']}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Wikipedia
                            </a>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
