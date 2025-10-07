import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IParticipant, IPlayer } from '../../stores/useMatch';
import { Dot } from '../common/Dot';
import { JSX } from 'react';

import AddIcon from '../../assets/icons/add.png';

interface IParticipanProps {
  participant: IParticipant;
  onAddParticipant: (participantId: string, playerId: number) => void;
  onEditParticipant: (
    participantId: string,
    playerId: number,
    playerName: string,
  ) => void;
}

export function Participan({
  participant,
  onAddParticipant,
  onEditParticipant,
}: IParticipanProps) {
  const findPlayer = (id: number): IPlayer => {
    const player = participant.players.find(p => p.id === id);
    return player === undefined ? { id: 0, name: '' } : player;
  };

  const renderPlayers = (): JSX.Element[] => {
    let partcitpanElmnt: JSX.Element[] = [];
    for (let i = 0; i < participant.attendance; i++) {
      const player = findPlayer(i + 1);
      partcitpanElmnt.push(
        <Player
          key={i}
          number={i + 1}
          player={player}
          onPress={() => onAddParticipant(participant.id, i + 1)}
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
    <View className="mb-5 px-5">
      <View className="flex flex-row justify-start items-center">
        <Text className="font-roboto-medium text-base">
          {participant.gender}
        </Text>
        <Dot />
        <Text className="font-roboto-medium text-base">
          {participant.playerLevel.name}
        </Text>
        <Dot />
        <Text className="font-roboto-medium text-base">
          ( {participant.attendance} Pemain )
        </Text>
      </View>
      <View className="mt-3">{participans.map(item => item)}</View>
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
  const isPlayerEmpty = player.id === 0 && player.name === '';
  return (
    <View className="w-full flex flex-row justify-start items-center mb-3">
      <TouchableOpacity
        onPress={onEdit}
        className="flex flex-row justify-start items-center"
      >
        <Text className="font-roboto-regular text-base">{number}.</Text>
        <Text className="font-roboto-regular text-base ml-2">
          {player.name}
        </Text>
      </TouchableOpacity>
      {isPlayerEmpty && (
        <TouchableOpacity
          onPress={onPress}
          className="ml-2 flex flex-row justify-start items-center"
        >
          <Image
            source={AddIcon}
            width={48}
            height={48}
            className="w-[18px] h-[18px]"
          />
          <Text className="font-roboto-regular text-base text-black ml-2">
            Tambah Peserta
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
