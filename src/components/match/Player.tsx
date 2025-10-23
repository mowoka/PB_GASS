import { Text, View } from 'react-native';
import { IPlayer } from '../../stores/useMatch';
import { cn } from '../../utils/func';
import { PaymentProof } from '../common/PaymentProof';

export function Player({
  player,
  number,
}: {
  player: IPlayer;
  number: number;
}) {
  const isConfirmAttendance = player.match_attendance;

  return (
    <View className="flex flex-row py-2 justify-start items-center">
      <Text
        className={cn(
          'font-roboto-regular text-sm',
          isConfirmAttendance ? 'text-black' : 'text-gray-400',
        )}
      >
        {number}.
      </Text>
      <Text
        className={cn(
          'ml-2 font-roboto-regular text-sm',
          isConfirmAttendance ? 'text-black' : 'text-gray-400',
        )}
      >
        {player.name}
      </Text>
      {player.payment.is_paid && (
        <PaymentProof paymentMethod={player.payment.payment_method} />
      )}
    </View>
  );
}
