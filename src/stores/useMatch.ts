import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IField, IPlayerLevel } from "./useSettings";
// import { MATH_DUMMY } from "../utils/data/match_dummy";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Gender = "Cowo" | "Cewe";

export type IMatchType = "single" | "double";

export type IStatus =
    | 'Mendatang'
    | 'Berlangsung'
    | 'Selesai'
    | 'Terlewat'
    | 'Dibatalkan'

export type PaymentMethod = 'QRIS' | 'CASH';

export interface IPayment {
    is_paid: boolean;
    payment_method?: PaymentMethod;
}

export interface IPlayer {
    id: string;
    name: string;
    match_attendance: boolean;
    total_played: number;
    payment: IPayment;
}

export interface IParticipant {
    id: string;
    playerLevel: IPlayerLevel;
    gender: Gender;
    attendance: number;
    players: IPlayer[];
}

export interface IMatchHistory {
    type: IMatchType;
    teamA: IPlayer[];
    teamB: IPlayer[];
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
    history: IMatchHistory[];
}

export interface IMatchStore {
    matches: IMatch[];
}

export interface IMatchActions {
    setMatches: (match: IMatch) => void;
    saveMatch: (match: IMatch) => void;
    findMatch: (id: string) => IMatch;
    findMatchForRegister: (date?: string) => IMatch[];
    findMatchForAttendance: (date?: string) => IMatch[];
    findMatchForPayment: (date?: string) => IMatch[];
    saveMatchAttendance: (match: IMatch) => void
    upsertPlayerParticipant: (matchId: string, participantId: string, player: IPlayer) => void;
    startMatch: (matchId: string) => void;
    endMatch: (matchId: string) => void;
    setMatchExpired: (matchId: string) => void;
}


export const EMTPY_MATCH: IMatch = {
    id: '',
    date: '',
    start_time: '',
    end_time: '',
    field: {
        id: '',
        name: '',
        link_map: '',
        address: '',
    },
    total_field: 0,
    status: 'Mendatang',
    participants: [],
    history: [],
}

export const EMTPY_PLAYER: IPlayer = {
    id: '',
    name: '',
    match_attendance: false,
    total_played: 0,
    payment: {
        is_paid: false,
        payment_method: undefined,
    },
}

export const useMatchStore = create<IMatchStore & IMatchActions>()(
    persist(
        (set, get) => ({
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
            }),
            saveMatch: (match: IMatch) => set(state => {
                const foundMatch = state.matches.find(m => m.id === match.id);
                if (foundMatch) {
                    return {
                        matches: state.matches.map(m => m.id === match.id ? match : m)
                    }
                }
                return state
            }),
            findMatch: (id: string) => {
                const match = get().matches.find(item => item.id === id);
                return match ?? EMTPY_MATCH;
            },
            findMatchForRegister: (date?: string) => {
                if (date === undefined) {
                    return get().matches.filter(item => item.status === 'Mendatang');
                }
                return get().matches.filter(item => item.status === 'Mendatang' && item.date === date);
            },
            findMatchForPayment: (date?: string) => {
                if (date === undefined) {
                    return get().matches.filter(item => item.status === 'Selesai');
                }
                return get().matches.filter(item => item.status === 'Selesai' && item.date === date);
            },
            findMatchForAttendance: (date?: string) => {
                if (date === undefined) {
                    return get().matches.filter(item => item.status === 'Berlangsung');
                }
                return get().matches.filter(item => item.status === 'Berlangsung' && item.date === date);
            },
            saveMatchAttendance: (match: IMatch) => set(state => {
                const findMatch = state.matches.find(m => m.id === match.id);
                if (findMatch) {
                    return {
                        matches: state.matches.map(m => m.id === match.id ? match : m)
                    }
                }
                return state
            }),
            upsertPlayerParticipant: (matchId: string, participantId: string, player: IPlayer) => set(state => {
                const match = state.matches.find(m => m.id === matchId);
                if (match) {
                    const participant = match.participants.find(p => p.id === participantId);
                    if (participant) {
                        let updatedPlayers;
                        const playerExists = participant.players.some(p => p.id === player.id);
                        if (playerExists) {
                            // Edit existing player
                            updatedPlayers = participant.players.map(p => p.id === player.id ? player : p);
                        } else {
                            // Add new player
                            updatedPlayers = [...participant.players, player];
                        }
                        const updatedParticipant = {
                            ...participant,
                            players: updatedPlayers
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
            }),
            startMatch: (matchId: string) => set(state => {
                const match = state.matches.find(m => m.id === matchId);
                if (match) {
                    const updatedMatch = {
                        ...match,
                        status: 'Berlangsung' as IStatus
                    };
                    return {
                        matches: state.matches.map(m => m.id === matchId ? updatedMatch : m)
                    };
                }
                return state;
            }),
            endMatch: (matchId: string) => set(state => {
                const match = state.matches.find(m => m.id === matchId);
                if (match) {
                    const updatedMatch = {
                        ...match,
                        status: 'Selesai' as IStatus
                    };
                    return {
                        matches: state.matches.map(m => m.id === matchId ? updatedMatch : m)
                    };
                }
                return state;
            }),
            setMatchExpired: (matchId: string) => set(state => {
                const match = state.matches.find(m => m.id === matchId);
                if (match) {
                    const updatedMatch = {
                        ...match,
                        status: 'Terlewat' as IStatus
                    };
                    return {
                        matches: state.matches.map(m => m.id === matchId ? updatedMatch : m)
                    };
                }
                return state;
            }),
        }),
        {
            name: 'match',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)