import { Text, View } from 'react-native';
import { isMatchToday } from '../../utils/func';

interface IMatchSchedule {
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
}

export function MatchSchedule({ date, startTime, endTime }: IMatchSchedule) {
  const dateValue = isMatchToday(new Date(date)) ? 'Hari ini' : date;
  return (
    <View className="w-full flex justify-center bg-black items-center pt-0 rounded-b-[20px] pb-5">
      <Text className="text-white font-ubuntu-medium text-xl">{dateValue}</Text>
      <View className="w-full flex flex-row justify-center items-center mt-2">
        <Text className="font-ubuntu-bold text-4xl text-white">
          {startTime}
        </Text>
        <Text className="mx-2 font-ubuntu-medium text-white">Sampai</Text>
        <Text className="font-ubuntu-bold text-4xl text-white">{endTime}</Text>
      </View>
    </View>
  );
}
