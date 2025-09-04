import { Text, View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';

export function Description({
  participant,
  number,
}: {
  number: number;
  participant: IParticipant;
}) {
  return (
    <View className="pl-2 mt-1.5 flex flex-row justify-start items-center">
      <Text className="text-xs">{number}.</Text>
      <View className="ml-1 flex flex-row justify-start items-center">
        <Text className="font-roboto-medium text-xs">{participant.gender}</Text>
        <Text className="font-roboto-medium text-xs ml-1">
          {participant.playerLevel.name}
        </Text>
        <Text className="font-roboto-medium text-xs ml-1">
          {participant.attendance} Orang
        </Text>
      </View>
    </View>
  );
}
