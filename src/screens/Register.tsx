import { Text, View } from 'react-native';

export default function RegisterScreen() {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-6">
      <View className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <Text className="text-3xl font-bold text-center text-gray-900 mb-4">
          🏠 Register Screen Screen
        </Text>
        <Text className="text-center text-gray-600 mb-8">
          Welcome to PBGass! This is your main dashboard.
        </Text>
      </View>
    </View>
  );
}
