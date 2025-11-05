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
    <View
      className="w-full bg-white rounded-2xl px-4 py-4 mb-4 border border-gray-100"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View className="flex flex-row justify-between items-start mb-3">
        <View className="flex-1 mr-3">
          <View className="flex flex-row items-center mb-1">
            <Text className="text-lg">🏟️</Text>
            <Text className="font-roboto-bold text-lg ml-2 text-gray-800">
              {title}
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-end items-center">
          <ButtonField image={Maps} onPress={onMap} bgColor="bg-blue-50" />
          <ButtonField image={Edit} onPress={onEdit} bgColor="bg-green-50" />
          <ButtonField image={Delete} onPress={onDelete} bgColor="bg-red-50" />
        </View>
      </View>
      <View className="w-full border-t border-gray-200 pt-3">
        <View className="flex flex-row items-start">
          <Text className="text-sm mr-2">📍</Text>
          <Text className="flex-1 text-sm font-roboto-regular text-gray-600 leading-5">
            {address}
          </Text>
        </View>
      </View>
    </View>
  );
}

function ButtonField({
  image,
  onPress,
  bgColor = 'bg-gray-50',
}: {
  image: ImageSourcePropType;
  onPress: () => void;
  bgColor?: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`ml-2 w-9 h-9 rounded-full ${bgColor} flex justify-center items-center`}
    >
      <Image
        source={image}
        width={20}
        height={20}
        className="w-[18px] h-[18px]"
      />
    </TouchableOpacity>
  );
}
