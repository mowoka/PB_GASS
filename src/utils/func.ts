import { twMerge } from 'tailwind-merge';
import { format, isToday } from 'date-fns';
import { IParticipant } from '../stores/useMatch';

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

export function isMatchToday(date: Date): boolean {
    return isToday(date);
}

export function getTotalParticipants(participants: IParticipant[]): number {
    let totalParticipant = 0;
    participants.map(item => {
        totalParticipant += item.attendance;
    })
    return totalParticipant;
}