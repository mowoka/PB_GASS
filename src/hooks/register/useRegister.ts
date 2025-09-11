import { useEffect, useState } from "react";
import { IMatch, useMatchStore } from "../../stores/useMatch";

export function useRegisterHooks() {
    const findMatchForRegister = useMatchStore(state => state.findMatchForRegister);

    const [matches, setMatches] = useState<IMatch[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleSelectDate = (date: string) => {
        setSelectedDate(date);
    };

    const handleFilter = () => {
        setMatches(findMatchForRegister(selectedDate));
    }

    const handleResetFilter = () => {
        setSelectedDate('');
        setMatches(findMatchForRegister());
    }

    useEffect(() => {
        setMatches(findMatchForRegister());
    }, [findMatchForRegister])

    return {
        matches,
        selectedDate,
        handleSelectDate,
        handleFilter,
        handleResetFilter,
    };
}