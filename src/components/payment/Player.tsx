import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IPlayer, PaymentMethod } from '../../stores/useMatch';
import { cn } from '../../utils/func';
import Money from '../../assets/icons/money.png';

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

function PaymentProof({ paymentMethod }: { paymentMethod?: PaymentMethod }) {
  return (
    <View className="ml-8 flex flex-row justify-start items-center">
      <Image source={Money} className="w-5 h-5" />
      {paymentMethod && (
        <Text className="ml-3 font-ubuntu-medium text-green-600">
          {paymentMethod}
        </Text>
      )}
    </View>
  );
}
