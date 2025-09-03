import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

/**
 * Utility function to merge Tailwind CSS classes.
 * Usage: cn('bg-red-500', condition && 'text-white', ...)
 */
export function cn(...inputs: (string | false | null | undefined)[]): string {
    return twMerge(inputs.filter(Boolean).join(' '));
}

export function getTime(date: Date | undefined): string {
    if (!date) return '-';
    return format(date, 'HH:mm');
}