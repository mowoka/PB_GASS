import { View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { Player } from './Player';
import { SHADOW_STYLES } from '../../utils/constants';

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
      style={SHADOW_STYLES.mediumSoft}
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
