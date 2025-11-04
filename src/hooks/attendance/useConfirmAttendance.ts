import { useMemo, useState } from "react";
import { IMatch, useMatchStore } from "../../stores/useMatch";

export function useConfirmAttendance({ id, backButton }: { id: string, backButton: () => void }) {
    const findMatch = useMatchStore(state => state.findMatch);
    const saveMatchAttendance = useMatchStore(state => state.saveMatchAttendance);
    const [match, setMatch] = useState<IMatch>(findMatch(id));

    const onConfirmParticipant = (participantId: string, playerId: string, value: boolean) => {
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

    const isParticipantChange: boolean = useMemo(() => {
        const originalMatch = findMatch(id);
        for (let i = 0; i < match.participants.length; i++) {
            const participant = match.participants[i];
            const originalParticipant = originalMatch.participants.find(p => p.id === participant.id);
            if (originalParticipant) {
                for (let j = 0; j < participant.players.length; j++) {
                    const player = participant.players[j];
                    const originalPlayer = originalParticipant.players.find(pl => pl.id === player.id);
                    if (originalPlayer) {
                        if (player.match_attendance !== originalPlayer.match_attendance) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }, [findMatch, id, match.participants])

    return {
        match,
        participants: match.participants ?? [],
        isParticipantChange,
        onConfirmParticipant,
        onSubmit,
    }
}