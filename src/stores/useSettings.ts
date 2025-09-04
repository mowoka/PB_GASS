import { create, } from "zustand";
import { persist } from "zustand/middleware";
import { FIELD_DUMMY } from "../utils/data/field_dummy";
import { PLAYER_LEVEL } from "../utils/data/player_level_dummy";

export interface IAccountSetting {
    name: string;
}

export interface IField {
    id: string;
    name: string;
    link_map: string;
    address: string;
}

export interface IPlayerLevel {
    id: string;
    name: string;
}

export interface ISettingActions {
    setAccountName: (name: string) => void;
    setField: (field: IField) => void;
    deleteField: (id: string) => void;
    updateField: (field: IField) => void;
    addPlayerLevel: (playerLevel: IPlayerLevel) => void;
    deletePlayerLevel: (id: string) => void;
}

export interface ISettings {
    account: IAccountSetting;
    fields: IField[];
    playerLevels: IPlayerLevel[];
}


export const useSettingStore = create<ISettings & ISettingActions>()(
    persist(
        (set) => ({
            account: {
                name: '',
            },
            fields: FIELD_DUMMY,
            playerLevels: PLAYER_LEVEL,
            setAccountName: (name: string) => set((state) => ({ account: { ...state.account, name } })),
            setField: (field: IField) => set((state) => {
                const existingField = state.fields.find((f) => f.id === field.id);
                if (existingField) return { fields: [...state.fields] };
                return {
                    fields: [...state.fields, field],
                };
            }),
            updateField: (field: IField) => set((state) => {
                const find_field = state.fields.find((f) => f.id === field.id);
                if (!find_field) return { fields: [...state.fields] };
                return {
                    fields: state.fields.map((f) => (f.id === field.id ? field : f)),
                };
            }),
            deleteField: (id: string) => set((state) => ({ fields: state.fields.filter((field) => field.id !== id) })),
            addPlayerLevel: (playerLevel: IPlayerLevel) => set((state) => {
                const existingLevel = state.playerLevels.find((l) => l.id === playerLevel.id);
                if (existingLevel) return { playerLevels: [...state.playerLevels] };
                return {
                    playerLevels: [...state.playerLevels, playerLevel],
                };
            }),
            deletePlayerLevel: (id: string) => set((state) => ({ playerLevels: state.playerLevels.filter((level) => level.id !== id) })),
        }),
        { name: 'settings' }
    ),
)
