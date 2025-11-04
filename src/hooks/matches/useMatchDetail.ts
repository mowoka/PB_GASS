import { useEffect, useMemo, useState } from "react";
import { IMatch, IPlayer, useMatchStore } from "../../stores/useMatch";
import { useIsFocused } from '@react-navigation/native'
import { MATCH_PAID_AMOUNT_PER_PLAYER } from "../../utils/constants";

export function useMatchDetailHooks({ id }: { id: string }) {
    const isFocused = useIsFocused();
    const findMatch = useMatchStore(state => state.findMatch);
    const startMatch = useMatchStore(state => state.startMatch);
    const endMatch = useMatchStore(state => state.endMatch);
    const saveMatch = useMatchStore(state => state.saveMatch);
    const [match, setMatch] = useState<IMatch>(findMatch(id));

    const onStartMatch = () => {
        startMatch(id);
        setMatch(findMatch(id));
    }

    const onEndMatch = () => {
        endMatch(id);
        setMatch(findMatch(id));
    }

    const onSubmitMatch = (players: string[]) => {
        const temp = { ...match };
        temp.participants.forEach((participant) => {
            participant.players.forEach((player) => {
                if (players.includes(player.id)) {
                    player.total_played = player.total_played + 1;
                }
            })
        })
        saveMatch(temp);
        setMatch(temp);
    }

    const showEditParticipant = useMemo(() => {
        return match.status === 'Mendatang';
    }, [match.status])

    const showConfirmAttendance = useMemo(() => {
        return match.status === 'Berlangsung';
    }, [match.status])

    const isMatchFinished = useMemo(() => {
        return match.status === 'Selesai';
    }, [match.status])

    const showButtomBottomScreen = useMemo(() => {
        return match.status === 'Mendatang' || match.status === 'Berlangsung';
    }, [match.status])

    const totalEarnings = useMemo(() => {
        let totalHasPlayersPaid = 0;

        match.participants.forEach((participant) => {
            participant.players.forEach((player) => {
                if (player.payment.is_paid) {
                    totalHasPlayersPaid += 1;
                }
            });
        })

        return totalHasPlayersPaid * MATCH_PAID_AMOUNT_PER_PLAYER;

    }, [match.participants])

    const qrisPaymentCount = useMemo(() => {
        let count = 0;

        match.participants.forEach((participant) => {
            participant.players.forEach((player) => {
                if (player.payment.is_paid && player.payment.payment_method === 'QRIS') {
                    count += 1;
                }
            });
        })

        return count;
    }, [match.participants])

    const cashPaymentCount = useMemo(() => {
        let count = 0;

        match.participants.forEach((participant) => {
            participant.players.forEach((player) => {
                if (player.payment.is_paid && player.payment.payment_method === 'CASH') {
                    count += 1;
                }
            });
        })

        return count;
    }, [match.participants])

    const standbyPlayer = useMemo(() => {
        let tempStandbyPlayer: IPlayer[] = [];
        match.participants.forEach((participant) => {
            participant.players.forEach((player) => {
                if (player.match_attendance) {
                    tempStandbyPlayer.push(player);
                }
            })
        })
        tempStandbyPlayer = tempStandbyPlayer.sort((a, b) => a.total_played - b.total_played);
        return tempStandbyPlayer;

    }, [match.participants])

    useEffect(() => {
        if (isFocused) {
            setMatch(findMatch(id));
        }
    }, [findMatch, id, isFocused])

    return {
        match,
        showEditParticipant,
        showConfirmAttendance,
        isMatchFinished,
        isMatchExpired: match.status === 'Terlewat',
        isMatchOngoing: match.status === 'Berlangsung',
        showButtomBottomScreen,
        totalEarnings,
        qrisPaymentCount,
        cashPaymentCount,
        standbyPlayer,
        onStartMatch,
        onEndMatch,
        onSubmitMatch,
    };
}