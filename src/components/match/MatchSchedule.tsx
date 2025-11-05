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
    <View className="w-full flex justify-center bg-black items-center pt-0 rounded-b-[35px] pb-5">
      <View className="bg-white/20 px-4 py-1.5 rounded-full mb-3">
        <Text className="text-white/90 font-ubuntu-medium text-base tracking-wide">
          {dateValue}
        </Text>
      </View>
      <View className="w-full flex flex-row justify-center items-center">
        <View className="items-center">
          <Text className="font-ubuntu-bold text-5xl text-white tracking-tight">
            {startTime}
          </Text>
        </View>
        <View className="mx-4 items-center">
          <View className="w-8 h-[2px] bg-white/40 mb-1" />
          <Text className="font-ubuntu-regular text-xs text-white/70 uppercase tracking-widest">
            Sampai
          </Text>
          <View className="w-8 h-[2px] bg-white/40 mt-1" />
        </View>
        <View className="items-center">
          <Text className="font-ubuntu-bold text-5xl text-white tracking-tight">
            {endTime}
          </Text>
        </View>
      </View>
    </View>
  );
}
