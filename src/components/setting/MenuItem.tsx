import { Image, Text, TouchableOpacity, View } from 'react-native';

// Asssets
import ArrowRight from '../../assets/icons/arrow-right.png';

export function MenuItem({
  title,
  description,
  onPress,
}: {
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full bg-white p-4 rounded-lg flex flex-row justify-start items-center mb-3"
    >
      <View className="flex-1">
        <Text className="font-bold text-xl">{title}</Text>
        <Text className="font-medium text-xs mt-1 text-gray-400">
          {description}
        </Text>
      </View>
      <View className="w-12 h-12 flex justify-center items-center">
        <Image
          source={ArrowRight}
          width={48}
          height={48}
          className="w-[30px] h-[30px]"
        />
      </View>
    </TouchableOpacity>
  );
}
