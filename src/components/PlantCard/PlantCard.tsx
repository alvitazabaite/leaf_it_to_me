import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlantCardProps } from '@/components/PlantCard/types.ts';
import { checkIfUrl } from '@/lib/utils.ts';

export function PlantCard({ plantName, plantResponse }: PlantCardProps) {
    const usedData = ['Images thumb', 'Images title', 'Name', 'id'];
    const filteredData = Object.entries(plantResponse).filter(([key]) => !usedData.includes(key));

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-serif">{plantName}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-sm font-serif space-y-1">
                    {filteredData.map(([label, value]) => (
                        <div key={label}>
                            <span className="font-bold text-gray-700">{label}: </span>
                            {checkIfUrl(value) ? (
                                <a href={encodeURI(value as string)} className="text-blue-600 underline">
                                    {value}
                                </a>
                            ) : (
                                <span className=" text-gray-700">{value}</span>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
