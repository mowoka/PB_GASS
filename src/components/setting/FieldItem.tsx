import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Assets
import Maps from '../../assets/icons/maps.png';
import Edit from '../../assets/icons/edit.png';
import Delete from '../../assets/icons/delete.png';

interface FieldItemProps {
  title: string;
  address: string;
  onMap: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function FieldItem({
  title,
  address,
  onMap,
  onEdit,
  onDelete,
}: FieldItemProps) {
  return (
    <View className="w-full border border-gray-500 rounded-md px-3 py-2 mb-5">
      <View className="flex flex-row justify-between items-center">
        <Text className="font-roboto-medium text-base">{title}</Text>
        <View className="flex flex-row justify-start items-center">
          <ButtonField image={Maps} onPress={onMap} />
          <ButtonField image={Edit} onPress={onEdit} />
          <ButtonField image={Delete} onPress={onDelete} />
        </View>
      </View>
      <View className="w-full my-2 border-b border-gray-500" />
      <Text className="tex-xs font-roboto-regular text-justify">{address}</Text>
    </View>
  );
}

function ButtonField({
  image,
  onPress,
}: {
  image: ImageSourcePropType;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} className="ml-2">
      <Image
        source={image}
        width={48}
        height={48}
        className="w-[25px] h-[25px]"
      />
    </TouchableOpacity>
  );
}
