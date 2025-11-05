import { Image, Text, View } from 'react-native';
import Money from '../../assets/icons/money.png';
import { PaymentMethod } from '../../stores/useMatch';

export function PaymentProof({
  paymentMethod,
}: {
  paymentMethod?: PaymentMethod;
}) {
  return (
    <View className="flex flex-row justify-start items-center">
      <Image source={Money} className="w-5 h-5" />
      {paymentMethod && (
        <Text className="ml-3 font-ubuntu-medium text-green-600">
          {paymentMethod}
        </Text>
      )}
    </View>
  );
}
