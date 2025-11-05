import { Image, Text, TouchableOpacity, View } from 'react-native';
import { EMTPY_PLAYER, IParticipant, IPlayer } from '../../stores/useMatch';
import { JSX } from 'react';

import AddIcon from '../../assets/icons/add.png';
import { ParticipantTitle } from '../common/ParticipantTitle';
import { generatePlayerId } from '../../utils/func';

interface IParticipanProps {
  participant: IParticipant;
  onAddParticipant: (participantId: string, playerId: string) => void;
  onEditParticipant: (
    participantId: string,
    playerId: string,
    playerName: string,
  ) => void;
}

export function Participan({
  participant,
  onAddParticipant,
  onEditParticipant,
}: IParticipanProps) {
  const findPlayer = (id: string): IPlayer => {
    const player = participant.players.find(p => p.id === id);
    return player === undefined
      ? {
          ...EMTPY_PLAYER,
          id: generatePlayerId(participant.id, participant.players),
        }
      : player;
  };

  const renderPlayers = (): JSX.Element[] => {
    let partcitpanElmnt: JSX.Element[] = [];
    for (let i = 0; i < participant.attendance; i++) {
      const player = findPlayer(participant.players[i].id);
      partcitpanElmnt.push(
        <Player
          key={i}
          number={i + 1}
          player={player}
          onPress={() => onAddParticipant(participant.id, player.id)}
          onEdit={() =>
            onEditParticipant(participant.id, player.id, player.name)
          }
        />,
      );
    }

    return partcitpanElmnt;
  };

  const participans = renderPlayers();

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
      <View>{participans.map(item => item)}</View>
    </View>
  );
}

function Player({
  number,
  player,
  onPress,
  onEdit,
}: {
  number: number;
  player: IPlayer;
  onPress: () => void;
  onEdit: () => void;
}) {
  const isPlayerEmpty = player.id === '' && player.name === '';

  return (
    <View className="w-full mb-2">
      {isPlayerEmpty ? (
        // Empty Slot - Show Add Button
        <TouchableOpacity
          onPress={onPress}
          className="flex flex-row justify-between items-center w-full py-3 px-4 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50"
          style={{
            shadowColor: '#3b82f6',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}
        >
          <View className="flex flex-row justify-start items-center flex-1">
            {/* Number Badge */}
            <View className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center mr-3">
              <Text className="font-roboto-bold text-base text-blue-600">
                {number}
              </Text>
            </View>

            {/* Add Participant Text */}
            <View className="flex-1">
              <Text className="font-roboto-medium text-base text-blue-700">
                Tambah Peserta
              </Text>
              <Text className="font-roboto-regular text-xs text-blue-600 mt-0.5">
                Tap untuk menambahkan pemain
              </Text>
            </View>
          </View>

          {/* Add Icon */}
          <View className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Image
              source={AddIcon}
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
              style={{ tintColor: 'white' }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        // Filled Slot - Show Player
        <TouchableOpacity
          onPress={onEdit}
          className="flex flex-row justify-between items-center w-full py-3 px-4 rounded-xl bg-white border border-gray-200"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 3,
            elevation: 2,
          }}
        >
          <View className="flex flex-row justify-start items-center flex-1">
            {/* Number Badge */}
            <View className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
              <Text className="font-roboto-bold text-base text-white">
                {number}
              </Text>
            </View>

            {/* Player Name */}
            <View className="flex-1">
              <Text className="font-roboto-medium text-base text-gray-900">
                {player.name}
              </Text>
              <Text className="font-roboto-regular text-xs text-gray-500 mt-0.5">
                Tap untuk edit
              </Text>
            </View>
          </View>

          {/* Edit Indicator */}
          <View className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Text className="text-base">✏️</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
