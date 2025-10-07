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
    const upsertPlayerParticipant = useMatchStore(state => state.upsertPlayerParticipant);
    const match = findMatch(id);

    const [form, setForm] = useState<IAddParticipantForm>(DEFAULT_FORM);


    const handleAddParticipant = (matchId: string, participantId: string, playerId: number) => {
        setForm(prev => ({ ...prev, matchId, participantId, player: { ...prev.player, id: playerId } }));
        onOpenModal();
    }

    const handleChangePlayerName = (name: string) => {
        setForm(prev => ({ ...prev, player: { ...prev.player, name } }))
    }

    const handleSubmitParticipant = () => {
        upsertPlayerParticipant(form.matchId, form.participantId, form.player);
        setForm(DEFAULT_FORM);
    }

    const handleEditParticipant = (matchId: string, participantId: string, playerId: number, name: string) => {
        setForm(prev => ({ ...prev, matchId, participantId, player: { ...prev.player, id: playerId, name } }));
        onOpenModal();
    }

    return { match, form, handleAddParticipant, handleChangePlayerName, handleSubmitParticipant, handleEditParticipant };
}