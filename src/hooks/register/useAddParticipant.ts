import { useState } from "react";
import { IPlayer, useMatchStore } from "../../stores/useMatch"

export interface IAddParticipantForm {
    matchId: string;
    participantId: string;
    player: IPlayer;
}

const DEFAULT_FORM: IAddParticipantForm = {
    matchId: '',
    participantId: '',
    player: {
        id: 0,
        name: '',
    }
}

export function useAddParticipantHooks({ id, onOpenModal }: { id: string, onOpenModal: () => void }) {
    const findMatch = useMatchStore(state => state.findMatch);
    const [form, setForm] = useState<IAddParticipantForm>(DEFAULT_FORM);
    const match = findMatch(id);

    const handleAddParticipant = (matchId: string, participantId: string, playerId: number) => {
        setForm(prev => ({ ...prev, matchId, participantId, player: { ...prev.player, id: playerId } }));
        onOpenModal();
    }

    const handleChangePlayerName = (name: string) => {
        setForm(prev => ({ ...prev, player: { ...prev.player, name } }))
    }

    return { match, form, handleAddParticipant, handleChangePlayerName };
}