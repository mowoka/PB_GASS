import { useMatchStore } from "../../stores/useMatch"

export function useMatchHooks() {
    const matchs = useMatchStore(state => state.matches);

    return { matchs }
}