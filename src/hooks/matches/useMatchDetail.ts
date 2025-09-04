import { useMatchStore } from "../../stores/useMatch";

export function useMatchDetailHooks({ id }: { id: string }) {
    const findMatch = useMatchStore(state => state.findMatch);

    const match = findMatch(id);

    return { match };
}