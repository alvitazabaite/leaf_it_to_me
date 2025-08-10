import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function checkIfUrl(value: string | null): boolean {
    return (
        typeof value === 'string' &&
        (value.startsWith('http://') ||
            value.startsWith('https://') ||
            value.startsWith('ftp://') ||
            value.includes('www.'))
    );
}
