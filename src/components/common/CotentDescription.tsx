import { Image, ImageSourcePropType, Text, View } from 'react-native';

export function ContentDescription({
  icon,
  name,
}: {
  icon: ImageSourcePropType;
  name: string;
}) {
  return (
    <View className="w-full flex flex-row justify-start items-start mb-2">
      <Image
        source={icon}
        width={48}
        height={48}
        className="w-[18px] h-[18px] mt-0.5"
      />
      <View className="ml-2">
        <Text className="text-md font-roboto-regular">{name}</Text>
      </View>
    </View>
  );
}
