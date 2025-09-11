import { Text, View } from 'react-native';
import { IParticipant, IPlayer } from '../../stores/useMatch';
import { Dot } from '../common/Dot';
import { JSX } from 'react';

interface IParticipanProps {
  participant: IParticipant;
}

export function Participan({ participant }: IParticipanProps) {
  const findPlayer = (id: number): IPlayer => {
    const player = participant.players.find(p => p.id === id);
    return player === undefined ? { id: 0, name: '' } : player;
  };

  const renderPlayers = (): JSX.Element[] => {
    let partcitpanElmnt: JSX.Element[] = [];
    for (let i = 0; i < participant.attendance; i++) {
      const player = findPlayer(i + 1);
      partcitpanElmnt.push(<Player key={i} number={i + 1} player={player} />);
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

function Player({ number, player }: { number: number; player: IPlayer }) {
  return (
    <View className="w-full flex flex-row justify-start items-center">
      <Text className="font-roboto-regular text-base">
        {number}. {player.name}
      </Text>
    </View>
  );
}
