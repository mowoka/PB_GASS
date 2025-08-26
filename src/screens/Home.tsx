import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-6">
      <View className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <Text className="text-3xl font-bold text-center text-gray-900 mb-4">
          🏠 Home Screen
        </Text>
        <Text className="text-center text-gray-600 mb-8">
          Welcome to PBGass! This is your main dashboard.
        </Text>

        {/* Feature Cards */}
        <View className="space-y-4 mb-8">
          <View className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <Text className="text-blue-800 font-semibold">Dashboard</Text>
            <Text className="text-blue-600 text-sm">View your analytics</Text>
          </View>

          <View className="bg-green-50 p-4 rounded-lg border border-green-200">
            <Text className="text-green-800 font-semibold">Quick Actions</Text>
            <Text className="text-green-600 text-sm">
              Access common features
            </Text>
          </View>

          <View className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <Text className="text-purple-800 font-semibold">
              Recent Activity
            </Text>
            <Text className="text-purple-600 text-sm">Latest updates</Text>
          </View>
        </View>

        {/* Navigation Button */}
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg"
          onPress={() => navigation.navigate('Settings')}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Go to Settings ⚙️
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
