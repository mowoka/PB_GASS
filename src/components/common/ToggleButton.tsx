import { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { cn } from '../../utils/func';

interface ToggleButtonProps {
  leftLabel: string;
  rightLabel: string;
  onToggle?: (isLeft: boolean) => void;
  defaultActive?: 'left' | 'right';
}

export function ToggleButton({
  leftLabel,
  rightLabel,
  onToggle,
  defaultActive = 'left',
}: ToggleButtonProps) {
  const [isLeftActive, setIsLeftActive] = useState(defaultActive === 'left');
  const [slideAnim] = useState(
    new Animated.Value(defaultActive === 'left' ? 0 : 1),
  );

  const handleToggle = (toLeft: boolean) => {
    if (toLeft === isLeftActive) return;

    setIsLeftActive(toLeft);
    onToggle?.(toLeft);

    Animated.spring(slideAnim, {
      toValue: toLeft ? 0 : 1,
      useNativeDriver: true,
      friction: 8,
      tension: 40,
    }).start();
  };

  return (
    <View className="flex-row w-full">
      <TouchableOpacity
        onPress={() => handleToggle(true)}
        className={cn(
          'flex-1 h-[47px] justify-center items-center rounded-l-lg border border-black',
          isLeftActive ? 'bg-black' : 'bg-white',
        )}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black',
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
            opacity: slideAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 0, 0],
            }),
          }}
        />
        <Text
          className={cn(
            'font-roboto-bold text-base z-10',
            isLeftActive ? 'text-white' : 'text-black',
          )}
        >
          {leftLabel}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleToggle(false)}
        className={cn(
          'flex-1 h-[47px] justify-center items-center rounded-r-lg border border-l-0 border-black',
          !isLeftActive ? 'bg-black' : 'bg-white',
        )}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black',
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-200, 0],
                }),
              },
            ],
            opacity: slideAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 0, 1],
            }),
          }}
        />
        <Text
          className={cn(
            'font-roboto-bold text-base z-10',
            !isLeftActive ? 'text-white' : 'text-black',
          )}
        >
          {rightLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
