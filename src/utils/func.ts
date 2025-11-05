import { twMerge } from 'tailwind-merge';
import { format, isToday } from 'date-fns';
import { IParticipant, IPlayer } from '../stores/useMatch';


export function cn(...inputs: (string | false | null | undefined)[]): string {
    return twMerge(inputs.filter(Boolean).join(' '));
}

export function generatePlayerId(
    participantId: string,
    existingPlayers: IPlayer[]
): string {
    // Filter players that belong to this participant
    const participantPlayers = existingPlayers.filter(player =>
        player.id.startsWith(participantId)
    );

    if (participantPlayers.length === 0) {
        return `${participantId}-1`;
    }

    // Extract all player numbers from existing IDs
    const existingNumbers = participantPlayers
        .map(player => {
            const match = player.id.match(new RegExp(`${participantId}-(\\d+)`));
            return match ? parseInt(match[1], 10) : 0;
        })
        .filter(num => num > 0);

    // Find the next available number
    const maxNumber = Math.max(...existingNumbers, 0);
    const nextNumber = maxNumber + 1;

    return `${participantId}-${nextNumber}`;
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