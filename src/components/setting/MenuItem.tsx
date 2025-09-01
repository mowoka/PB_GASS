import { Image, Text, TouchableOpacity, View } from 'react-native';

// Asssets
import ArrowRight from '../../assets/icons/arrow-right.png';

export function MenuItem({
  title,
  onPress,
}: {
  title: string;
  description?: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full bg-white px-1 rounded-lg flex flex-row justify-start items-center mb-3 border-b border-black"
    >
      <View className="flex-1">
        <Text className="font-roboto-regular text-base ">{title}</Text>
      </View>
      <View className="w-12 h-12 flex justify-center items-center">
        <Image
          source={ArrowRight}
          width={48}
          height={48}
          className="w-[20px] h-[20px]"
        />
      </View>
    </TouchableOpacity>
  );
}
