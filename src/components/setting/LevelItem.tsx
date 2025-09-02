import { Image, Text, TouchableOpacity, View } from 'react-native';
import Delete from '../../assets/icons/delete.png';

interface LevelItemProps {
  name: string;
  onDelete: () => void;
}

export function LevelItem({ name, onDelete }: LevelItemProps) {
  return (
    <View className="w-full p-3 mb-3 border border-primary-gray rounded-md flex flex-row justify-between items-center">
      <Text className="font-roboto-medium text-md">{name}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Image
          width={48}
          height={48}
          source={Delete}
          className="w-[25px] h-[25px]"
        />
      </TouchableOpacity>
    </View>
  );
}
