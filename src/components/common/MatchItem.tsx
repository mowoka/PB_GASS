import { Text, TouchableOpacity } from 'react-native';
import { IMatch } from '../../stores/useMatch';
import { Dot } from './Dot';

interface IMatchItemProps {
  match: IMatch;
  onPress: () => void;
}

export function MatchItem({ match, onPress }: IMatchItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full p-3 border border-primary-gray rounded-lg mb-3 flex flex-row justify-start items-center"
    >
      <Text className="font-roboto-medium text-md">{match.field.name}</Text>
      <Dot />
      <Text className="font-roboto-medium text-md">{match.date}</Text>
      <Dot />
      <Text className="font-roboto-regular">
        {match.start_time} - {match.end_time}
      </Text>
    </TouchableOpacity>
  );
}
