import { create, } from "zustand";
import { persist } from "zustand/middleware";

export interface IAccountSetting {
    name: string;
}

export interface IField {
    id: string;
    name: string;
    link_map: string;
    address: string;
}

export interface IAccountSettingActions {
    setAccountName: (name: string) => void;
    setField: (field: IField) => void;
    deleteField: (id: string) => void;
    updateField: (field: IField) => void;
}

export interface ISettings {
    account: IAccountSetting;
    fields: IField[];
}


export const useSettingStore = create<ISettings & IAccountSettingActions>()(
    persist(
        (set) => ({
            account: {
                name: '',
            },
            fields: [],
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
        }),
        { name: 'settings' }
    ),
)
