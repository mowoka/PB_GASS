import { View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { Player } from './Player';

export function ParticipantItem({
  participant,
  onConfirmParticipant,
}: {
  participant: IParticipant;
  onConfirmParticipant: (
    participantId: string,
    playerId: number,
    value: boolean,
  ) => void;
}) {
  return (
    <View className="mb-5">
      <ParticipantTitle participant={participant} />
      <View className="mt-2">
        {participant.players.map((player, index) => {
          return (
            <Player
              key={index}
              player={player}
              onChange={(playerId, value) =>
                onConfirmParticipant(participant.id, playerId, value)
              }
            />
          );
        })}
      </View>
    </View>
  );
}
