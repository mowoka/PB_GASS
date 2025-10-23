import { useState } from "react";
import { IMatch, PaymentMethod, useMatchStore } from "../../stores/useMatch"

export interface IPaymentForm {
    participant_id: string;
    player_id: number;
    payment_method?: PaymentMethod;
}

const EMPTY_PAYMENT_FORM: IPaymentForm = {
    participant_id: '',
    player_id: 0,
    payment_method: undefined,
}

export function useConfirmPaymentHooks({ id, openBottomModal, hideBottomModal }: { id: string, openBottomModal: () => void, hideBottomModal: () => void }) {
    const findMatch = useMatchStore(state => state.findMatch);
    const saveMatch = useMatchStore(state => state.saveMatch);
    const [match, setMatch] = useState<IMatch>(findMatch(id));
    const [form, setForm] = useState<IPaymentForm>(EMPTY_PAYMENT_FORM);

    const handlePlayerPayment = (participant_id: string, player_id: number) => {
        setForm((prev) => ({ ...prev, participant_id, player_id }));
        openBottomModal();
    }

    const onSubmit = (paymentMethod: PaymentMethod) => {
        const tempMatch: IMatch = {
            ...match,
            participants: match.participants.map(participant => {
                if (participant.id === form.participant_id) {
                    participant.players = participant.players.map(player => {
                        if (player.id === form.player_id) {
                            player.payment = {
                                is_paid: true,
                                payment_method: paymentMethod,
                            }
                        }
                        return player;
                    })
                }
                return participant;
            })
        }
        saveMatch(tempMatch);
        setMatch(tempMatch);
        hideBottomModal();
        setForm(EMPTY_PAYMENT_FORM);
    }

    return {
        match,
        form,
        participants: match.participants,
        onSubmit,
        handlePlayerPayment,
    }
}