import { SearchForm } from '@/components/SearchForm/SearchForm.tsx';
import { plantsData } from '@/api/mockData.ts';

export default function Search() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <SearchForm plants={plantsData} />
        </div>
    );
}
