import { useEffect, useState } from "react";
import { IMatch, useMatchStore } from "../../stores/useMatch";
import { useIsFocused } from '@react-navigation/native'

export function useMatchDetailHooks({ id }: { id: string }) {
    const isFocused = useIsFocused();
    const findMatch = useMatchStore(state => state.findMatch);
    const [match, setMatch] = useState<IMatch>(findMatch(id));


    useEffect(() => {
        if (isFocused) {
            setMatch(findMatch(id));
        }
    }, [findMatch, id, isFocused])

    return { match };
}