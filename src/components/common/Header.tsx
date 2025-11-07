import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

// Asset
import ArrowBack from '../../assets/icons/arrow-back.png';
import { JSX } from 'react';

export function Header({
  title,
  hideBackButton = false,
  showRightIcon = false,
  rightIcon = <></>,
  onPress = () => {},
  onPressRightIcon = () => {},
}: {
  title: string;
  hideBackButton?: boolean;
  onPress?: () => void;
  showRightIcon?: boolean;
  rightIcon?: JSX.Element;
  onPressRightIcon?: () => void;
}) {
  return (
    <View className="bg-black w-full h-24 px-5 pb-3 flex flex-row justify-start items-end">
      <View className="w-full flex flex-row justify-start items-center relative">
        {!hideBackButton && (
          <View className="w-8 h-8 absolute left-0 z-10 flex justify-center items-center">
            <TouchableWithoutFeedback onPress={onPress}>
              <Image
                source={ArrowBack}
                width={40}
                height={40}
                className="w-[35px] h-[35px]"
              />
            </TouchableWithoutFeedback>
          </View>
        )}
        <View className="flex-1">
          <Text className="text-center uppercase text-xl text-white font-ubuntu-bold">
            {title}
          </Text>
        </View>
        {showRightIcon && (
          <View className="w-8 h-8 absolute right-0 z-10 flex justify-center items-center">
            <TouchableWithoutFeedback onPress={onPressRightIcon}>
              {rightIcon}
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    </View>
  );
}
