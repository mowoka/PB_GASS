import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SHADOW_STYLES } from '../../utils/constants';

// Assets
import ArrowRight from '../../assets/icons/arrow-right.png';

// Icon components for different menu types
function MenuIcon({ iconType }: { iconType: string }) {
  const iconEmojis: { [key: string]: string } = {
    profile: '👤',
    field: '🏟️',
    level: '⭐',
  };

  return (
    <View
      className={`w-12 h-12 rounded-xl flex justify-center items-center mr-4`}
    >
      <Text className="text-2xl">{iconEmojis[iconType] || '⚙️'}</Text>
    </View>
  );
}

export function MenuItem({
  title,
  description,
  iconType = 'default',
  onPress,
}: {
  title: string;
  description?: string;
  iconType?: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full bg-white px-4 py-4 rounded-2xl flex flex-row justify-start items-center mb-4 shadow-md border border-gray-100"
      style={SHADOW_STYLES.menuItem}
    >
      <MenuIcon iconType={iconType} />
      <View className="flex-1">
        <Text className="font-roboto-bold text-base text-gray-800 mb-1">
          {title}
        </Text>
        {description && (
          <Text className="font-roboto-regular text-sm text-gray-500">
            {description}
          </Text>
        )}
      </View>
      <View className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center">
        <Image
          source={ArrowRight}
          width={20}
          height={20}
          className="w-[16px] h-[16px]"
        />
      </View>
    </TouchableOpacity>
  );
}
