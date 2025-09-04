import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import { IHomeMenu } from '../../screens/Home';

export function Menu({ menu }: { menu: IHomeMenu[] }) {
  return (
    <View className="w-full p-5 relative -mt-32">
      <View className="bg-white px-1 py-3 rounded-xl border border-gray-200">
        <View className="w-full flex flex-row justify-stretch items-start flex-wrap">
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
      className="flex flex-col justify-center items-center mb-5 mx-[5px] w-20"
      onPress={onPress}
    >
      <View className="bg-white rounded-full w-16 h-16 p-3 flex justify-center items-center">
        <Image
          source={image}
          width={48}
          height={48}
          className="w-full h-full"
        />
      </View>
      <Text className="mt-2 text-xs font-roboto-regular text-center text-gray-600">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
