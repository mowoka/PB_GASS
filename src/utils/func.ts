import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes.
 * Usage: cn('bg-red-500', condition && 'text-white', ...)
 */
export function cn(...inputs: (string | false | null | undefined)[]): string {
    return twMerge(inputs.filter(Boolean).join(' '));
}
