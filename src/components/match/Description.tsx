import { Text, View } from 'react-native';

export function Description({
  title,
  total,
}: {
  title: string;
  total: string;
}) {
  return (
    <View className="mt-2 flex flex-row justify-start items-center">
      <Text className="font-medium text-xs w-16">{title}</Text>
      <Text className="font-medium text-xs px-3">:</Text>
      <Text className="font-medium text-xs ">{total} Orang</Text>
    </View>
  );
}
