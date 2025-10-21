import { useState } from "react";
import { IMatch, useMatchStore } from "../../stores/useMatch";

export function useConfirmAttendance({ id, backButton }: { id: string, backButton: () => void }) {
    const findMatch = useMatchStore(state => state.findMatch);
    const saveMatchAttendance = useMatchStore(state => state.saveMatchAttendance);
    const [match, setMatch] = useState<IMatch>(findMatch(id));

    const onConfirmParticipant = (participantId: string, playerId: number, value: boolean) => {
        setMatch(prev => ({
            ...prev,
            participants: prev.participants.map(participant => {
                if (participant.id === participantId) {
                    return {
                        ...participant,
                        players: participant.players.map(player => {
                            if (player.id === playerId) {
                                return {
                                    ...player,
                                    match_attendance: value,
                                }
                            }
                            return player;
                        })
                    }
                }
                return participant;
            })
        }))
    }

    const onSubmit = () => {
        saveMatchAttendance(match);
        backButton();
    }

    return {
        match,
        participants: match.participants ?? [],
        onConfirmParticipant,
        onSubmit,
    }
}