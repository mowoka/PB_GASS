import { Text, TouchableOpacity, View } from 'react-native';
import { IPlayer } from '../../stores/useMatch';
import { PaymentProof } from '../common/PaymentProof';
import { SHADOW_STYLES } from '../../utils/constants';

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
  // Design for attended players
  if (isAttended) {
    return (
      <TouchableOpacity
        onPress={onConfirmPayment}
        className="flex flex-row justify-between items-center w-full py-3 px-4 mb-2 rounded-xl bg-white border border-gray-100"
        style={SHADOW_STYLES.medium}
      >
        <View className="flex flex-row justify-start items-center flex-1">
          {/* Avatar Circle - Paid or Unpaid */}
          <View
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
              player.payment.is_paid ? 'bg-green-500' : 'bg-amber-500'
            }`}
          >
            <Text className="font-roboto-bold text-base text-white">
              {number}
            </Text>
          </View>

          {/* Player Name and Payment Status */}
          <View className="flex-1">
            <Text className="font-roboto-medium text-base text-gray-900">
              {player.name}
            </Text>
            {player.payment.is_paid ? (
              <View className="mt-1">
                <PaymentProof paymentMethod={player.payment.payment_method} />
              </View>
            ) : (
              <View className="mt-1 bg-amber-50 px-2 py-0.5 rounded self-start">
                <Text className="font-roboto-medium text-xs text-amber-700">
                  ⏳ Belum Bayar
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Payment Status Icon */}
        <View className="ml-2">
          {player.payment.is_paid ? (
            <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center">
              <Text className="text-base">✓</Text>
            </View>
          ) : (
            <View className="w-8 h-8 bg-amber-100 rounded-full items-center justify-center">
              <Text className="text-base">💰</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }

  // Design for unattended players (disabled state)
  return (
    <View
      className="flex flex-row justify-between items-center w-full py-3 px-4 mb-2 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 opacity-50"
      style={SHADOW_STYLES.light}
    >
      <View className="flex flex-row justify-start items-center flex-1">
        {/* Avatar Circle - Unattended */}
        <View className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center mr-3">
          <Text className="font-roboto-bold text-base text-gray-400">
            {number}
          </Text>
        </View>

        {/* Player Name and Status */}
        <View className="flex-1">
          <Text className="font-roboto-medium text-base text-gray-400 line-through">
            {player.name}
          </Text>
          <View className="mt-1 bg-gray-200 px-2 py-0.5 rounded self-start">
            <Text className="font-roboto-medium text-xs text-gray-500">
              ✗ Tidak Hadir
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
