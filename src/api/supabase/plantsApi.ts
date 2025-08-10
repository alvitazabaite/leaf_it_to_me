import { supabase } from '@/api/supabase/client.ts';
import { PlantNamesProps, PlantProps } from '@/api/supabase/types.ts';

export async function getPlantsNames(): Promise<PlantNamesProps> {
    const { data, error } = await supabase.from('plants_data').select('Name');
    if (error) return { status: 400 };
    return { status: 200, response: (data ?? []).map(plant => plant.Name) };
}

export async function getPlantByName(name: string): Promise<PlantProps> {
    const { data, error } = await supabase.from('plants_data').select('*').eq('Name', name).single();
    if (error) return { status: 400 };
    return { status: 200, response: data };
}
