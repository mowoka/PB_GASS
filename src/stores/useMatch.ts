import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IField, IPlayerLevel } from "./useSettings";
import { MATH_DUMMY } from "../utils/data/match_dummy";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    match_attendance: boolean;
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
    upsertPlayerParticipant: (matchId: string, participantId: string, player: IPlayer) => void;
}


const EMTPY_MATCH: IMatch = {
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
                const match = get().matches.find(item => item.id === id);
                return match ?? EMTPY_MATCH;
            },
            findMatchForRegister: (date?: string) => {
                if (date === undefined) {
                    return get().matches.filter(item => item.status === 'Mendatang');
                }
                return get().matches.filter(item => item.status === 'Mendatang' && item.date === date);
            },
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
        }),
        {
            name: 'match',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)