import { Image, Text, TouchableOpacity, View } from 'react-native';
import Delete from '../../assets/icons/delete.png';
import { SHADOW_STYLES } from '../../utils/constants';

interface LevelItemProps {
  name: string;
  onDelete: () => void;
}

export function LevelItem({ name, onDelete }: LevelItemProps) {
  return (
    <View
      className="w-full px-4 py-4 mb-3 bg-white rounded-2xl flex flex-row justify-between items-center border border-gray-100"
      style={SHADOW_STYLES.mediumElevated}
    >
      <View className="flex flex-row items-center flex-1">
        <View className="w-10 h-10 bg-purple-100 rounded-full flex justify-center items-center mr-3">
          <Text className="text-lg">⭐</Text>
        </View>
        <Text className="font-roboto-medium text-base text-gray-800">
          {name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={onDelete}
        className="w-9 h-9 bg-red-50 rounded-full flex justify-center items-center"
      >
        <Image
          width={20}
          height={20}
          source={Delete}
          className="w-[18px] h-[18px]"
        />
      </TouchableOpacity>
    </View>
  );
}
