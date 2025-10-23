import { useMatchStore } from "../../stores/useMatch"

export function usePaymentHooks() {
    const findMatch = useMatchStore(state => state.findMatchForPayment);
    const matches = findMatch();

    return { matches }
}