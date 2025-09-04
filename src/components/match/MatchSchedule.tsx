import { Text, View } from 'react-native';
import { isMatchToday } from '../../utils/func';

interface IMatchSchedule {
  date: string;
  startTime: string;
  endTime: string;
  location: string;
}

export function MatchSchedule({
  date,
  startTime,
  endTime,
  location,
}: IMatchSchedule) {
  const dateValue = isMatchToday(new Date(date)) ? 'Hari ini' : date;
  return (
    <View className="w-full flex justify-center items-center pt-3">
      <Text className="text-black font-ubuntu-medium text-xl">{dateValue}</Text>
      <View className="w-full flex flex-row justify-center items-center mt-2">
        <Text className="font-ubuntu-bold text-4xl">{startTime}</Text>
        <Text className="mx-2 font-ubuntu-medium">Sampai</Text>
        <Text className="font-ubuntu-bold text-4xl">{endTime}</Text>
      </View>
      <View className="mt-2">
        <Text className="font-ubuntu-medium text-base text-gray-800">
          {location}
        </Text>
      </View>
    </View>
  );
}
