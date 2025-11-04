import { Text, View } from 'react-native';
import { IPlayer } from '../../stores/useMatch';
import { cn } from '../../utils/func';
import { PaymentProof } from '../common/PaymentProof';

export function Player({
  player,
  number,
  showTotalPlayed = false,
}: {
  player: IPlayer;
  number: number;
  showTotalPlayed?: boolean;
}) {
  const isConfirmAttendance = player.match_attendance;

  return (
    <View className="flex flex-row justify-between items-center w-full">
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
      {showTotalPlayed && (
        <View className="flex flex-row justify-start items-center ml-4">
          <Text className="font-roboto-bold text-sm">
            {player.total_played}
          </Text>
          <Text className="ml-2 font-roboto text-sm"> Bertanding</Text>
        </View>
      )}
    </View>
  );
}
