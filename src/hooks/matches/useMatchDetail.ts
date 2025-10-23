import { useEffect, useMemo, useState } from "react";
import { IMatch, useMatchStore } from "../../stores/useMatch";
import { useIsFocused } from '@react-navigation/native'

export function useMatchDetailHooks({ id }: { id: string }) {
    const isFocused = useIsFocused();
    const findMatch = useMatchStore(state => state.findMatch);
    const startMatch = useMatchStore(state => state.startMatch);
    const endMatch = useMatchStore(state => state.endMatch);
    const [match, setMatch] = useState<IMatch>(findMatch(id));

    const onStartMatch = () => {
        startMatch(id);
        setMatch(findMatch(id));
    }

    const onEndMatch = () => {
        endMatch(id);
        setMatch(findMatch(id));
    }


    const showEditParticipant = useMemo(() => {
        return match.status === 'Mendatang';
    }, [match.status])

    const showConfirmAttendance = useMemo(() => {
        return match.status === 'Berlangsung';
    }, [match.status])

    const showPayment = useMemo(() => {
        return match.status === 'Selesai';
    }, [match.status])

    useEffect(() => {
        if (isFocused) {
            setMatch(findMatch(id));
        }
    }, [findMatch, id, isFocused])

    return {
        match,
        showEditParticipant,
        showConfirmAttendance,
        showPayment,
        isMatchExpired: match.status === 'Terlewat',
        onStartMatch,
        onEndMatch,
    };
}