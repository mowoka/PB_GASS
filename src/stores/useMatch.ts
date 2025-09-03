import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IField, IPlayerLevel } from "./useSettings";

export type Gender = "Cowo" | "Cewe";

export type IStatus =
    | 'Mendatang'
    | 'Berlangsung'
    | 'Selesai'
    | 'Terlewat'
    | 'Dibatalkan';


export interface IParticipant {
    id: string;
    playerLevel: IPlayerLevel;
    gender: Gender;
    attendance: number;
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
}


export const useMatchStore = create<IMatchStore & IMatchActions>()(
    persist(
        (set) => ({
            matches: [],
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
            })
        }),
        { name: 'match' }
    )
)