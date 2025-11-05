import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { cn } from '../../utils/func';

export function ContentDescription({
  icon,
  name,
  align = 'center',
}: {
  icon: ImageSourcePropType;
  name: string;
  align?: 'start' | 'center';
}) {
  return (
    <View
      className={cn(
        'w-full flex flex-row justify-start mb-3',
        align === 'start' && 'items-start',
        align === 'center' && 'items-center',
      )}
    >
      <View className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center">
        <Image
          source={icon}
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
      </View>
      <View className="ml-3 flex-1">
        <Text className="text-base font-roboto-regular text-gray-800 leading-6">
          {name}
        </Text>
      </View>
    </View>
  );
}
