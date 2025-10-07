import { useMatchStore } from "../../stores/useMatch";

export function useAttendanceHooks() {
    const findMatchForAttendance = useMatchStore(state => state.findMatchForAttendance);
    const matches = findMatchForAttendance();

    return {
        matches,
    }
}