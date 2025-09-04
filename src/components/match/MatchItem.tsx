import { Text, View } from 'react-native';
import { Status } from './Status';
import { Description } from './Description';
import { IMatch } from '../../stores/useMatch';

interface IMatchItemProps {
  match: IMatch;
}

export function MatchItem({ match }: IMatchItemProps) {
  return (
    <View className="w-full bg-white p-3 rounded-lg border border-primary-gray mb-5">
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="font-bold text-lg">{match.date}</Text>
        <Status status={match.status} />
      </View>
      <View className="w-full border-b border-primary-gray h-[1px] py-1" />
      <View className="mt-3">
        <Text className="font-bold text-md mb-1.5">
          {match.field.name} {match.start_time} - {match.end_time} (
          {match.total_field} Lapang){' '}
        </Text>
        {match.participants.map((item, index) => {
          return (
            <Description key={index} number={index + 1} participant={item} />
          );
        })}
      </View>
    </View>
  );
}
