import { useMatchStore } from "../../stores/useMatch";

export function useConfirmAttendance({ id }: { id: string }) {
    const findMatch = useMatchStore(state => state.findMatch);
    const match = findMatch(id);


    return {
        match,
        participants: match.participants ?? [],
    }
}