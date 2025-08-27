import { Text, View } from 'react-native';
import { Status } from './Status';
import { Description } from './Description';

export function MatchItem() {
  return (
    <View className="w-full bg-white p-3 rounded-lg border border-gray-300 mb-5">
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="font-bold text-lg">10 Oktober 2025</Text>
        <Status status="Mendatang" />
      </View>
      <View className="w-full border-b border-gray-300 h-[1px] py-2" />
      <View className="mt-3">
        <Text className="font-bold text-md">MBS GOR Badminton (2 Lapang)</Text>
        <Description title="Laki laki" total="18" />
        <Description title="Perempuan" total="12" />
      </View>
    </View>
  );
}
