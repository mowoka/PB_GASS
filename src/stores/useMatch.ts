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
            matches: [
                {
                    id: Date.now().toString(),
                    date: '6 September 2025',
                    start_time: '08:00',
                    end_time: '10:00',
                    field: { id: 'gor-mbs', name: 'GOR MBS', link_map: 'https://maps.app.goo.gl/3sgcaB8cLmduuRKq5', address: '7977+VWH, Jongke Tengah, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55285' },
                    total_field: 2,
                    status: 'Mendatang',
                    participants: [
                        {
                            id: (Date.now() + 1).toString(),
                            playerLevel: { id: 'menengah-atas', name: 'Menengah Atas' },
                            gender: 'Cowo',
                            attendance: 8,
                        },
                        {
                            id: (Date.now() + 2).toString(),
                            playerLevel: { id: 'all-level', name: 'All Level' },
                            gender: 'Cowo',
                            attendance: 4,
                        },
                        {
                            id: (Date.now() + 3).toString(),
                            playerLevel: { id: 'all-level', name: 'All Level' },
                            gender: 'Cewe',
                            attendance: 6,
                        },
                    ],
                }
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
            })
        }),
        { name: 'match' }
    )
)