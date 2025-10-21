import { Text, View } from 'react-native';
import { Dot } from './Dot';
import { IParticipant } from '../../stores/useMatch';

export function ParticipantTitle({
  participant,
}: {
  participant: IParticipant;
}) {
  return (
    <View className="flex flex-row justify-start items-center">
      <Text className="font-roboto-medium text-base">{participant.gender}</Text>
      <Dot />
      <Text className="font-roboto-medium text-base">
        {participant.playerLevel.name}
      </Text>
      <Dot />
      <Text className="font-roboto-medium text-base">
        ( {participant.attendance} Pemain )
      </Text>
    </View>
  );
}
