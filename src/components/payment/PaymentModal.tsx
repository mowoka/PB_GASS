import { Text, TouchableOpacity, View } from 'react-native';
import { PaymentMethod } from '../../stores/useMatch';

export function PaymentModal({
  onSelectPaymentMethod,
}: {
  onSelectPaymentMethod: (method: PaymentMethod) => void;
}) {
  return (
    <View className="flex-1">
      <Text className="mb-5 w-full text-center font-roboto-bold text-base">
        Pilih metode pembayaran
      </Text>
      <ButtonOption name="CASH" onPress={() => onSelectPaymentMethod('CASH')} />
      <ButtonOption name="QRIS" onPress={() => onSelectPaymentMethod('QRIS')} />
    </View>
  );
}

function ButtonOption({
  name,
  onPress,
}: {
  name: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className="py-3 border border-primary-gray rounded-lg px-5 mb-2"
      onPress={onPress}
    >
      <Text className="font-roboto-regular text-lg">{name}</Text>
    </TouchableOpacity>
  );
}
