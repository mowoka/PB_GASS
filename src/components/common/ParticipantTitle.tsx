import { Text, View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';

export function ParticipantTitle({
  participant,
}: {
  participant: IParticipant;
}) {
  return (
    <View className="flex flex-row justify-start items-center">
      <View className="bg-primary-red/10 px-3 py-1 rounded-lg mr-2">
        <Text className="font-roboto-bold text-sm text-primary-red">
          {participant.gender}
        </Text>
      </View>
      <View className="bg-blue-50 px-3 py-1 rounded-lg mr-2">
        <Text className="font-roboto-bold text-sm text-blue-700">
          {participant.playerLevel.name}
        </Text>
      </View>
      <View className="bg-gray-100 px-3 py-1 rounded-lg">
        <Text className="font-roboto-medium text-sm text-gray-700">
          {participant.attendance} Pemain
        </Text>
      </View>
    </View>
  );
}
