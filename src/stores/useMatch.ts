import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IField, IPlayerLevel } from "./useSettings";
import { MATH_DUMMY } from "../utils/data/match_dummy";

export type Gender = "Cowo" | "Cewe";

export type IStatus =
    | 'Mendatang'
    | 'Berlangsung'
    | 'Selesai'
    | 'Terlewat'
    | 'Dibatalkan';

export interface IPlayer {
    id: number;
    name: string;
}

export interface IParticipant {
    id: string;
    playerLevel: IPlayerLevel;
    gender: Gender;
    attendance: number;
    players: IPlayer[];
}

export interface IMatch {
    id: string;
    date: string;
    start_time: string;
    end_time: string;
    field: IField;
    total_field: number;
    status: IStatus;
    participants: IParticipant[];
}

export interface IMatchStore {
    matches: IMatch[];
}

export interface IMatchActions {
    setMatches: (match: IMatch) => void;
    findMatch: (id: string) => IMatch;
    findMatchForRegister: (date?: string) => IMatch[];
    addPlayerParticipant: (matchId: string, participantId: string, player: IPlayer) => void;
}


export const useMatchStore = create<IMatchStore & IMatchActions>()(
    persist(
        (set, get) => ({
            matches: [
                MATH_DUMMY,
            ],
            setMatches: (match: IMatch) => set(state => {
                const find_match = state.matches.find(m => m.id === match.id);
                if (find_match) {
                    return {
                        matches: state.matches.map(m => (m.id === match.id ? match : m))
                    };
                }
                return {
                    matches: [...state.matches, match]
                };
            }),
            findMatch: (id: string) => {
                return get().matches.find(item => item.id === id)!;
            },
            findMatchForRegister: (date?: string) => {
                if (date === undefined) {
                    return get().matches.filter(item => item.status === 'Mendatang');
                }
                return get().matches.filter(item => item.status === 'Mendatang' && item.date === date);
            },
            addPlayerParticipant: (matchId: string, participantId: string, player: IPlayer) => set(state => {
                const match = state.matches.find(m => m.id === matchId);
                if (match) {
                    const participant = match.participants.find(p => p.id === participantId);
                    if (participant) {
                        const updatedParticipant = {
                            ...participant,
                            players: [...participant.players, player]
                        };
                        const updatedMatch = {
                            ...match,
                            participants: match.participants.map(p => p.id === participantId ? updatedParticipant : p)
                        };
                        return {
                            matches: state.matches.map(m => m.id === matchId ? updatedMatch : m)
                        };
                    }
                }
                return state;
            })

        }),
        { name: 'match' }
    )
)