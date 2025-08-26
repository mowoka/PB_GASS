import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

interface Props {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const settingsOptions = [
    {
      title: 'Profile',
      description: 'Manage your profile information',
      icon: '👤',
    },
    {
      title: 'Notifications',
      description: 'Configure notification preferences',
      icon: '🔔',
    },
    {
      title: 'Privacy',
      description: 'Privacy and security settings',
      icon: '🔒',
    },
    { title: 'Theme', description: 'Customize app appearance', icon: '🎨' },
    { title: 'Language', description: 'Change app language', icon: '🌐' },
    { title: 'About', description: 'App information and version', icon: 'ℹ️' },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 p-6">
        <View className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
            ⚙️ Settings
          </Text>
          <Text className="text-center text-gray-600 mb-6">
            Customize your PBGass experience
          </Text>

          {/* Settings Options */}
          <View className="space-y-3">
            {settingsOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <Text className="text-2xl mr-4">{option.icon}</Text>
                <View className="flex-1">
                  <Text className="text-gray-900 font-semibold text-lg">
                    {option.title}
                  </Text>
                  <Text className="text-gray-600 text-sm">
                    {option.description}
                  </Text>
                </View>
                <Text className="text-gray-400 text-xl">›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Back Button */}
        <View className="bg-white rounded-xl shadow-lg p-6">
          <TouchableOpacity
            className="bg-gray-500 p-4 rounded-lg"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white text-center font-semibold text-lg">
              ← Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
