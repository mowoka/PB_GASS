import { Text, TouchableOpacity } from 'react-native';
import { IPlayer } from '../../stores/useMatch';
import { cn } from '../../utils/func';
import { PaymentProof } from '../common/PaymentProof';

export function Player({
  number,
  player,
  isAttended,
  onConfirmPayment,
}: {
  number: number;
  player: IPlayer;
  isAttended: boolean;
  onConfirmPayment: () => void;
}) {
  return (
    <TouchableOpacity
      disabled={!isAttended}
      onPress={onConfirmPayment}
      className="flex flex-row justify-start items-center mb-2"
    >
      <Text
        className={cn(
          'font-roboto-semi-bold text-base',
          isAttended ? 'text-black' : 'text-primary-gray',
        )}
      >
        {number}.
      </Text>
      <Text
        className={cn(
          'font-roboto-semi-bold text-base ml-2',
          isAttended ? 'text-black' : 'text-primary-gray',
        )}
      >
        {player.name}
      </Text>
      {player.payment.is_paid && (
        <PaymentProof paymentMethod={player.payment.payment_method} />
      )}
    </TouchableOpacity>
  );
}
