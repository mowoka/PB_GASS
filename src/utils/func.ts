import { twMerge } from 'tailwind-merge';
import { format, isToday } from 'date-fns';
import { IParticipant } from '../stores/useMatch';


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

export function isDateOverCurrent(date: Date): boolean {
    const currentDate = new Date();
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const providedDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return providedDateOnly > currentDateOnly;
}

export function formatCurrency(amount: number): string {
    if (isNaN(amount)) return 'Rp 0';

    return 'Rp ' + amount.toLocaleString('id-ID');
}