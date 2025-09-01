import { create, } from "zustand";
import { persist } from "zustand/middleware";

export interface IAccountSetting {
    name: string;
}

export interface IAccountSettingActions {
    setAccountName: (name: string) => void;
}

export interface ISettings {
    account: IAccountSetting;
}


export const useSettingStore = create<ISettings & IAccountSettingActions>()(
    persist(
        (set) => ({
            account: {
                name: '',
            },
            setAccountName: (name: string) => set((state) => ({ account: { ...state.account, name } })),
        }),
        { name: 'settings' }
    ),
)
