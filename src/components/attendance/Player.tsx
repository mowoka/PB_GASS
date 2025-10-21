import { View } from 'react-native';
import { Checkbox } from '../common/Checkbox';
import { IPlayer } from '../../stores/useMatch';

export function Player({
  player,
  onChange,
}: {
  player: IPlayer;
  onChange: (playerId: number, value: boolean) => void;
}) {
  return (
    <View className="flex flex-row justify-start items-center my-2">
      <Checkbox
        onPress={value => onChange(player.id, value)}
        text={player.name}
        value={player.match_attendance}
      />
    </View>
  );
}
