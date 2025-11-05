import { Text, TouchableOpacity, View } from 'react-native';
import { IPlayer } from '../../stores/useMatch';

export function Player({
  player,
  onChange,
}: {
  player: IPlayer;
  onChange: (playerId: string, value: boolean) => void;
}) {
  const isChecked = player.match_attendance;

  return (
    <TouchableOpacity
      onPress={() => onChange(player.id, !isChecked)}
      className={`flex flex-row justify-between items-center w-full py-3 px-4 mb-2 rounded-xl ${
        isChecked
          ? 'bg-green-50 border border-green-200'
          : 'bg-white border border-gray-200'
      }`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: isChecked ? 0.08 : 0.04,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="flex flex-row justify-start items-center flex-1">
        {/* Checkbox Circle */}
        <View
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
            isChecked
              ? 'bg-green-500 border-2 border-green-600'
              : 'bg-white border-2 border-gray-300'
          }`}
        >
          {isChecked ? (
            <Text className="font-roboto-bold text-xl text-white">✓</Text>
          ) : (
            <View className="w-5 h-5 rounded-full bg-gray-100" />
          )}
        </View>

        {/* Player Name */}
        <View className="flex-1">
          <Text
            className={`font-roboto-medium text-base ${
              isChecked ? 'text-green-900' : 'text-gray-900'
            }`}
          >
            {player.name}
          </Text>
          {isChecked && (
            <View className="mt-1">
              <Text className="font-roboto-regular text-xs text-green-700">
                ✓ Hadir dikonfirmasi
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Status Badge */}
      <View className="ml-2">
        {isChecked ? (
          <View className="bg-green-500 px-3 py-1.5 rounded-lg">
            <Text className="font-roboto-bold text-xs text-white">HADIR</Text>
          </View>
        ) : (
          <View className="bg-gray-200 px-3 py-1.5 rounded-lg">
            <Text className="font-roboto-bold text-xs text-gray-600">
              BELUM
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
