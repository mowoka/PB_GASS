import { View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';

export function ParticipantItem({
  participant,
}: {
  participant: IParticipant;
}) {
  return (
    <View className="mb-5">
      <ParticipantTitle participant={participant} />
    </View>
  );
}
