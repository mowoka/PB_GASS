import { Text, View } from 'react-native';
import { formatCurrency } from '../../utils/func';
import LinearGradient from 'react-native-linear-gradient';
import { SHADOW_STYLES } from '../../utils/constants';

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
    <View className="px-4 mt-6">
      <LinearGradient
        colors={['#1f2937', '#111827']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full rounded-2xl overflow-hidden"
        style={SHADOW_STYLES.deep}
      >
        <View className="p-6 flex flex-col justify-center items-center">
          {/* Header Icon & Label */}
          <View className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
            <Text className="text-2xl">💰</Text>
          </View>

          <Text className="text-white/80 text-sm font-roboto-medium uppercase tracking-widest mb-2">
            Total Pendapatan
          </Text>

          {/* Total Amount */}
          <Text className="text-white text-4xl font-ubuntu-bold mb-6">
            {formatCurrency(totalEarnings)}
          </Text>

          {/* Payment Method Stats */}
          <View className="flex flex-row justify-center items-center w-full gap-3">
            {/* QRIS Payment */}
            <View
              className="flex-1 bg-white/10 rounded-xl p-4 items-center"
              style={SHADOW_STYLES.cardDark}
            >
              <View className="bg-blue-500/20 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Text className="text-xl">📱</Text>
              </View>
              <Text className="font-roboto-bold text-2xl text-white mb-1">
                {qrisPaymentCount}
              </Text>
              <Text className="font-roboto-medium text-xs text-white/70 uppercase tracking-wide">
                QRIS
              </Text>
            </View>

            {/* Cash Payment */}
            <View
              className="flex-1 bg-white/10 rounded-xl p-4 items-center"
              style={SHADOW_STYLES.cardDark}
            >
              <View className="bg-green-500/20 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                <Text className="text-xl">💵</Text>
              </View>
              <Text className="font-roboto-bold text-2xl text-white mb-1">
                {cashPaymentCount}
              </Text>
              <Text className="font-roboto-medium text-xs text-white/70 uppercase tracking-wide">
                CASH
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
