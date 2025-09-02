import { useMemo, useState } from "react";
import { useSnackbar } from "../../providers/snakbar";
import { IPlayerLevel, useSettingStore } from "../../stores/useSettings"

const DEFAULT_PLAYER_LEVEL: IPlayerLevel = {
    id: '',
    name: '',
};

export function usePlayerLevelHooks({ onCloseBottomModal }: { onCloseBottomModal: () => void }) {
    const { handleShow, handleClose } = useSnackbar();
    const playerLevels = useSettingStore(state => state.playerLevels);
    const addPlayerLevel = useSettingStore(state => state.addPlayerLevel);
    const deletePlayerLevel = useSettingStore(state => state.deletePlayerLevel);

    const [playerLevel, setPlayerLevel] = useState<IPlayerLevel>(DEFAULT_PLAYER_LEVEL);

    const handleOnChange = (key: 'name', value: string) => {
        setPlayerLevel((prev) => ({ ...prev, [key]: value }))
    }

    const handleSavePlayerLevel = () => {
        const data = { ...playerLevel }
        if (data.id === '') {
            data.id = playerLevel.name.replace(' ', '-').toLowerCase();
        }
        addPlayerLevel(data);
        onCloseBottomModal();
    }

    const handleDeletePlayerLevel = (item: IPlayerLevel) => {
        handleShow({
            show: true,
            autohide: false,
            title: 'Hapus Level',
            message: `Apakah Anda yakin ingin menghapus lapangan ${item.name}?`,
            onCancel: handleClose,
            onPress: () => {
                deletePlayerLevel(item.id);
                handleClose();
            },
        })
    }

    const isBtnSaveDisable = useMemo(() => {
        return !playerLevel.name;
    }, [playerLevel.name])

    return { playerLevels, playerLevel, isBtnSaveDisable, handleOnChange, handleDeletePlayerLevel, handleSavePlayerLevel }
}