import { Text, View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { Player } from './Player';
import { Button } from '../common/Button';
import { SHADOW_STYLES } from '../../utils/constants';

export function MatchParticipant({
  participants,
  showEditParticipant,
  showConfirmAttendance,
  showPayment,
  disabled,
  showTotalPlayed,
  onAddParticipant,
  onConfirmAttendance,
  onConfirmPayment,
}: {
  participants: IParticipant[];
  showEditParticipant: boolean;
  showConfirmAttendance: boolean;
  showPayment: boolean;
  disabled?: boolean;
  showTotalPlayed: boolean;
  onAddParticipant: () => void;
  onConfirmAttendance: () => void;
  onConfirmPayment: () => void;
}) {
  const isZeroParticipant = participants.length === 0;

  return (
    <View className="px-4 pb-6 bg-gray-50">
      {/* Section Header */}
      <View className="pt-6 pb-3">
        <Text className="font-ubuntu-bold text-xl text-gray-900">
          Daftar Pemain
        </Text>
        {!isZeroParticipant && (
          <Text className="font-roboto-regular text-sm text-gray-500 mt-0.5">
            Total {participants.reduce((acc, p) => acc + p.players.length, 0)}{' '}
            pemain terdaftar
          </Text>
        )}
      </View>

      {/* Participants List */}
      {isZeroParticipant ? (
        <ZeroParticipant />
      ) : (
        <View className="space-y-4">
          {participants.map((participant, index) => (
            <View
              key={index}
              className="bg-white rounded-2xl p-4 mb-4"
              style={SHADOW_STYLES.mediumSoft}
            >
              {/* Category Header */}
              <View className="mb-3 pb-2 border-b border-gray-100">
                <ParticipantTitle participant={participant} />
              </View>

              {/* Players */}
              <View>
                {participant.players.map((player, pIndex) => (
                  <Player
                    key={pIndex}
                    player={player}
                    number={pIndex + 1}
                    showTotalPlayed={showTotalPlayed && player.match_attendance}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Action Buttons */}
      <View className="mt-4 w-full">
        {(
          [
            showConfirmAttendance && {
              text: 'Konfirmasi Kehadiran',
              onPress: onConfirmAttendance,
              className: '',
              variant: 'outlined' as const,
            },
            showEditParticipant && {
              text: isZeroParticipant
                ? 'Tambah Partisipasi'
                : 'Edit Partisipasi',
              onPress: onAddParticipant,
              className: 'mt-3',
              variant: 'contained' as const,
            },
            showPayment && {
              text: 'Konfirmasi Pembayaran',
              onPress: onConfirmPayment,
              className: 'mt-3',
              variant: 'contained' as const,
            },
          ].filter(Boolean) as Array<{
            text: string;
            onPress: () => void;
            className: string;
            variant: 'contained' | 'outlined';
          }>
        ).map((btn, index) => (
          <Button
            key={index}
            btnText={btn.text}
            onPress={btn.onPress}
            variant={btn.variant}
            btnClass={btn.className}
            isBtnDisable={disabled}
          />
        ))}
      </View>
    </View>
  );
}

function ZeroParticipant() {
  return (
    <View
      className="w-full flex justify-center items-center py-12 bg-white rounded-2xl"
      style={SHADOW_STYLES.small}
    >
      <View className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
        <Text className="text-3xl">👥</Text>
      </View>
      <Text className="font-roboto-medium text-gray-900 text-base">
        Belum ada Partisipasi
      </Text>
      <Text className="font-roboto-regular text-gray-500 text-sm mt-1">
        Tambahkan pemain untuk memulai
      </Text>
    </View>
  );
}
