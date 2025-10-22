import { useMatchStore } from "../../stores/useMatch"

export function useMatchHooks() {
    const matchs = useMatchStore(state => state.matches);
    const setMatchExpired = useMatchStore(state => state.setMatchExpired);

    const updateMatchExpired = (matchId: string) => {
        setMatchExpired(matchId);
    }

    return { matchs, updateMatchExpired }
}