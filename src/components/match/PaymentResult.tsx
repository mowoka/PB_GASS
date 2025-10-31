import { Text, View } from 'react-native';
import { formatCurrency } from '../../utils/func';

export function PaymentResult({
  totalEarnings,
  qrisPaymentCount,
  cashPaymentCount,
}: {
  totalEarnings: number;
  qrisPaymentCount: number;
  cashPaymentCount: number;
}) {
  return (
    <View className="w-full mt-5">
      <View className="w-full p-5 bg-black flex flex-col justify-center items-center">
        <Text className="text-white text-base font-roboto-medium">
          Pendapatan
        </Text>
        <Text className="text-white text-3xl font-ubuntu-bold mt-1">
          {formatCurrency(totalEarnings)}
        </Text>
        <View className="flex flex-row justify-center items-center mt-2">
          <View className="mr-1.5">
            <Text className="font-roboto-medium text-white">
              QRIS ({qrisPaymentCount})
            </Text>
          </View>
          <View className="ml-1.5">
            <Text className="font-roboto-medium text-white">
              CASH ({cashPaymentCount})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
