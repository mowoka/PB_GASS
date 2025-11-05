import { Text, View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';

export function Description({
  participant,
  number,
}: {
  number: number;
  participant: IParticipant;
}) {
  const genderIcon = participant.gender === 'Cowo' ? '👨' : '👩';

  return (
    <View className="bg-white rounded-lg px-3 py-2.5 mb-2 flex-row items-center border border-gray-100">
      {/* Number Badge */}
      <View className="w-6 h-6 rounded-full bg-gray-200 items-center justify-center mr-3">
        <Text className="text-xs font-roboto-bold text-gray-700">{number}</Text>
      </View>

      {/* Participant Info */}
      <View className="flex-1 flex-row items-center flex-wrap">
        {/* Gender */}
        <View className="bg-gray-100 rounded-lg px-2.5 py-1 mr-2 flex-row items-center">
          <Text className="text-xs mr-1">{genderIcon}</Text>
          <Text className="font-roboto-bold text-xs text-gray-700">
            {participant.gender}
          </Text>
        </View>

        {/* Level */}
        <View className="bg-blue-50 rounded-lg px-2.5 py-1 mr-2">
          <Text className="font-roboto-bold text-xs text-blue-700">
            {participant.playerLevel.name}
          </Text>
        </View>

        {/* Attendance */}
        <View className="bg-green-50 rounded-lg px-2.5 py-1 flex-row items-center">
          <Text className="text-xs mr-1">👥</Text>
          <Text className="font-roboto-bold text-xs text-green-700">
            {participant.attendance} Orang
          </Text>
        </View>
      </View>
    </View>
  );
}
