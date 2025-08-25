/**
 * Sample React Native App with Real Tailwind CSS
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-gray-100">
        <View className="p-8">
          <Text className="text-3xl font-bold text-center text-gray-900 mb-4">
            Welcome to PBGass!
          </Text>
          <Text className="text-base text-center text-gray-600 mb-8">
            React Native + TypeScript + Real Tailwind CSS
          </Text>

          {/* Success Card */}
          <View className="bg-blue-500 p-4 rounded-lg mb-6 shadow-lg">
            <Text className="text-white text-center text-lg font-semibold">
              🎉 Project Setup Complete!
            </Text>
          </View>

          {/* Features Card */}
          <View className="bg-white p-6 rounded-xl shadow-md mb-6">
            <Text className="text-xl font-bold text-gray-900 mb-4">
              Features Included:
            </Text>
            <View className="space-y-3">
              <Text className="text-gray-700 text-base mb-2">
                ✅ React Native CLI
              </Text>
              <Text className="text-gray-700 text-base mb-2">
                ✅ TypeScript
              </Text>
              <Text className="text-gray-700 text-base mb-2">
                ✅ Real Tailwind CSS
              </Text>
              <Text className="text-gray-700 text-base mb-2">
                ✅ NativeWind v2
              </Text>
              <Text className="text-gray-700 text-base">✅ Node.js 22</Text>
            </View>
          </View>

          {/* Color Demo Cards */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Tailwind Color Demo:
            </Text>
            <View className="flex-row justify-between mb-3">
              <View className="bg-red-500 p-3 rounded-lg flex-1 mr-2">
                <Text className="text-white text-center font-medium">Red</Text>
              </View>
              <View className="bg-green-500 p-3 rounded-lg flex-1 ml-2">
                <Text className="text-white text-center font-medium">
                  Green
                </Text>
              </View>
            </View>
            <View className="flex-row justify-between">
              <View className="bg-purple-500 p-3 rounded-lg flex-1 mr-2">
                <Text className="text-white text-center font-medium">
                  Purple
                </Text>
              </View>
              <View className="bg-yellow-500 p-3 rounded-lg flex-1 ml-2">
                <Text className="text-black text-center font-medium">
                  Yellow
                </Text>
              </View>
            </View>
          </View>

          {/* Spacing Demo */}
          <View className="bg-indigo-100 p-4 rounded-lg">
            <Text className="text-indigo-900 font-semibold mb-2">
              Tailwind Spacing Demo:
            </Text>
            <View className="bg-indigo-500 p-2 mb-2 rounded">
              <Text className="text-white text-center">Padding 2</Text>
            </View>
            <View className="bg-indigo-600 p-4 mb-2 rounded">
              <Text className="text-white text-center">Padding 4</Text>
            </View>
            <View className="bg-indigo-700 p-6 rounded">
              <Text className="text-white text-center">Padding 6</Text>
            </View>
          </View>

          {/* Real Tailwind Demo */}
          <View className="mt-6 bg-pink-500 p-4 rounded-xl">
            <Text className="text-white text-xl font-bold text-center">
              Real Tailwind CSS! 🎨
            </Text>
            <Text className="text-white text-center mt-2">
              Using className prop with NativeWind v2
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
