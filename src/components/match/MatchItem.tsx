import { Text, TouchableOpacity, View } from 'react-native';
import { Status } from './Status';
import { Description } from './Description';
import { IMatch } from '../../stores/useMatch';
import { isDateOverCurrent } from '../../utils/func';

interface IMatchItemProps {
  match: IMatch;
  onPress: () => void;
}

export function MatchItem({ match, onPress }: IMatchItemProps) {
  const isMatchExpired = isDateOverCurrent(new Date(match.date));

  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full bg-white p-3 rounded-lg border border-primary-gray mb-5"
    >
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="text-base font-ubuntu-bold">{match.date}</Text>
        <Status status={isMatchExpired ? 'Terlewat' : match.status} />
      </View>
      <View className="w-full border-b border-primary-gray h-[1px] py-1" />
      <View className="mt-3">
        <Text className="font-roboto-bold text-md mb-1.5">
          {match.field.name} {match.start_time} - {match.end_time} (
          {match.total_field} Lapang){' '}
        </Text>
        {match.participants.map((item, index) => {
          return (
            <Description key={index} number={index + 1} participant={item} />
          );
        })}
      </View>
    </TouchableOpacity>
  );
}
