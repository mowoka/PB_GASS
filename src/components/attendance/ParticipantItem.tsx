import { View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { Player } from './Player';
import { SHADOW_STYLES } from '../../utils/constants';

export function ParticipantItem({
  participant,
  onConfirmParticipant,
}: {
  participant: IParticipant;
  onConfirmParticipant: (
    participantId: string,
    playerId: string,
    value: boolean,
  ) => void;
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
