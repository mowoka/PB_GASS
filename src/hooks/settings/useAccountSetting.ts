import { useSettingStore } from "../../stores/useSettings";

export function useAccountSetting() {
    const name = useSettingStore(state => state.account.name);
    const updateName = useSettingStore(state => state.setAccountName);

    const handleUpdateName = (value: string) => {
        updateName(value);
    }

    return {
        name,
        handleUpdateName
    }
}