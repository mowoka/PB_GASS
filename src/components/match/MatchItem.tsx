import { Text, View } from 'react-native';
import { Status } from './Status';

export function MatchItem() {
  return (
    <View className="w-full bg-white p-3 rounded-lg border border-gray-300">
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="font-bold text-base">10 Oktober 2025</Text>
        <Status status="Berlangsung" />
      </View>
    </View>
  );
}
