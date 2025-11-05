import { View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { Player } from './Player';

export function ParticipantItem({
  participant,
  onConfirmPayment,
}: {
  participant: IParticipant;
  onConfirmPayment: (player_id: string) => void;
}) {
  return (
    <View
      className="bg-white rounded-2xl p-4 mb-4"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
      }}
    >
      {/* Category Header */}
      <View className="mb-3 pb-2 border-b border-gray-100">
        <ParticipantTitle participant={participant} />
      </View>

      {/* Players */}
      <View>
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
