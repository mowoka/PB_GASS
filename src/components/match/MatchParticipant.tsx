import { Text, View } from 'react-native';
import { IParticipant } from '../../stores/useMatch';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { Player } from './Player';
import { Button } from '../common/Button';

export function MatchParticipant({
  participants,
  showEditParticipant,
  showConfirmAttendance,
  showPayment,
  disabled,
  onAddParticipant,
  onConfirmAttendance,
  onConfirmPayment,
}: {
  participants: IParticipant[];
  showEditParticipant: boolean;
  showConfirmAttendance: boolean;
  showPayment: boolean;
  disabled?: boolean;
  onAddParticipant: () => void;
  onConfirmAttendance: () => void;
  onConfirmPayment: () => void;
}) {
  const isZeroParticipant = participants.length === 0;

  return (
    <View className="p-5">
      {isZeroParticipant ? (
        <ZeroParticipant />
      ) : (
        participants.map((participant, index) => {
          return (
            <View key={index} className="mb-2">
              <ParticipantTitle participant={participant} />
              {participant.players.map((player, pIndex) => {
                return (
                  <Player key={pIndex} player={player} number={pIndex + 1} />
                );
              })}
            </View>
          );
        })
      )}
      <View className="mt-3 w-full">
        {(
          [
            showConfirmAttendance && {
              text: 'Konfirmasi Kehadiran',
              onPress: onConfirmAttendance,
              className: '',
            },
            showEditParticipant && {
              text: isZeroParticipant
                ? 'Tambah Partisipasi'
                : 'Edit Partisipasi',
              onPress: onAddParticipant,
              className: 'mt-3',
            },
            showPayment && {
              text: 'Konfirmasi Pembayaran',
              onPress: onConfirmPayment,
              className: 'mt-3',
            },
          ].filter(Boolean) as Array<{
            text: string;
            onPress: () => void;
            className: string;
          }>
        ).map((btn, index) => (
          <Button
            key={index}
            btnText={btn.text}
            onPress={btn.onPress}
            variant="contained"
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
    <View className="w-full flex justify-center items-center">
      <Text>Belum ada Partisipasi</Text>
    </View>
  );
}
