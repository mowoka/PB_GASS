import { Text, TouchableOpacity, View } from 'react-native';
import { IMatch } from '../../stores/useMatch';
import { getTotalParticipants } from '../../utils/func';

interface IMatchItemProps {
  match: IMatch;
}

export function MatchItem({ match }: IMatchItemProps) {
  return (
    <TouchableOpacity className="w-full p-3 border border-primary-gray rounded-lg mb-3 flex flex-row justify-start items-center">
      <Text className="font-roboto-medium text-md">{match.date}</Text>
      <View className="w-2 h-2 rounded-full bg-black mx-2" />
      <Text className="font-roboto-regular">
        {match.start_time} - {match.end_time}
      </Text>
      <View className="w-2 h-2 rounded-full bg-black mx-2" />
      <Text className="font-roboto-regular">
        {getTotalParticipants(match.participants)} Orang
      </Text>
    </TouchableOpacity>
  );
}
