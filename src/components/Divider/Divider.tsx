import { DividerProps } from '@/components/Divider/types.ts';

export function Divider({ className = '' }: DividerProps) {
    return <div className={`w-full h-[1px] bg-[#CDCDCD] ${className}`} />;
}
