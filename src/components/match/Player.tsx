import { Text, View } from 'react-native';
import { IPlayer } from '../../stores/useMatch';
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

  // Design for confirmed attendance
  if (isConfirmAttendance) {
    return (
      <View
        className="flex flex-row justify-between items-center w-full py-3 px-4 mb-2 rounded-xl bg-white border border-gray-100"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        <View className="flex flex-row justify-start items-center flex-1">
          {/* Avatar Circle - Confirmed */}
          <View className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
            <Text className="font-roboto-bold text-base text-white">
              {number}
            </Text>
          </View>

          {/* Player Name and Payment */}
          <View className="flex-1">
            <Text className="font-roboto-medium text-base text-gray-900">
              {player.name}
            </Text>
            {player.payment.is_paid && (
              <View className="mt-1">
                <PaymentProof paymentMethod={player.payment.payment_method} />
              </View>
            )}
          </View>
        </View>

        {/* Match Stats */}
        {showTotalPlayed && (
          <View
            className="bg-blue-50 px-3 py-1.5 rounded-lg ml-2"
            style={{
              shadowColor: '#3b82f6',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 1,
            }}
          >
            <View className="flex flex-row items-center">
              <Text className="font-roboto-bold text-sm text-blue-700">
                {player.total_played}
              </Text>
              <Text className="ml-1.5 font-roboto-regular text-xs text-blue-600">
                Main
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }

  // Design for unconfirmed attendance (standby/pending)
  return (
    <View
      className="flex flex-row justify-between items-center w-full py-3 px-4 mb-2 rounded-xl border-2 border-dashed border-gray-300 bg-white"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.02,
        shadowRadius: 1,
        elevation: 0,
      }}
    >
      <View className="flex flex-row justify-start items-center flex-1">
        {/* Avatar Circle - Unconfirmed */}
        <View className="w-10 h-10 rounded-full border-2 border-gray-300 bg-gray-50 flex items-center justify-center mr-3">
          <Text className="font-roboto-bold text-base text-gray-400">
            {number}
          </Text>
        </View>

        {/* Player Name and Status */}
        <View className="flex-1">
          <Text className="font-roboto-medium text-base text-gray-400 line-through">
            {player.name}
          </Text>
          <View className="mt-1 bg-amber-50 px-2 py-0.5 rounded self-start">
            <Text className="font-roboto-medium text-xs text-amber-700">
              ⏳ Belum Konfirmasi
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
