import React from 'react';
import { View, Text } from 'react-native';

export default function NativeWindDemo() {
  return (
    <View className="bg-green-100 p-4 m-4 rounded-lg">
      <Text className="text-green-800 text-lg font-bold text-center">
        🎨 NativeWind is Working!
      </Text>
      <Text className="text-green-600 text-center mt-2">
        This component uses Tailwind CSS classes
      </Text>
    </View>
  );
}
