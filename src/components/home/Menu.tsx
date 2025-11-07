import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import { IHomeMenu } from '../../screens/Home';
import { SHADOW_STYLES } from '../../utils/constants';

export function Menu({ menu }: { menu: IHomeMenu[] }) {
  return (
    <View className="w-full px-5 relative -mt-12">
      <View
        className="bg-white px-4 py-6 rounded-3xl shadow-2xl"
        style={SHADOW_STYLES.extraLarge}
      >
        <Text className="text-gray-800 text-lg text-center font-ubuntu-bold mb-4 px-1">
          Menu
        </Text>
        <View className="w-full flex flex-row justify-start items-start flex-wrap">
          {menu.map((item, index) => {
            return (
              <MenuItem
                key={index}
                name={item.name}
                image={item.image}
                onPress={item.onPress}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

function MenuItem({
  name,
  image,
  onPress,
}: {
  name: string;
  image: ImageSourcePropType;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className="flex flex-col justify-center items-center mb-3 w-[22%] mx-[1.5%]"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="bg-gradient-to-br from-gray-50 to-white rounded-3xl w-full aspect-square p-3 flex justify-center items-center border-2 border-gray-100">
        <Image
          source={image}
          width={40}
          height={40}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </View>
      <Text className="mt-2.5 text-[11px] font-roboto-medium text-center text-gray-700 leading-tight">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
