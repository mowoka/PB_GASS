import { View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { Player } from './Player';

export function ParticipantItem({
  participant,
  onConfirmPayment,
}: {
  participant: IParticipant;
  onConfirmPayment: (player_id: number) => void;
}) {
  return (
    <View className="mb-5">
      <ParticipantTitle participant={participant} />
      <View className="mt-2">
        {participant.players.map((player, pIndex) => {
          return (
            <Player
              key={pIndex}
              number={pIndex + 1}
              player={player}
              onConfirmPayment={() => onConfirmPayment(player.id)}
              isAttended={player.match_attendance}
            />
          );
        })}
      </View>
    </View>
  );
}
