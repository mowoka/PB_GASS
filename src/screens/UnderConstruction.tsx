import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Layout } from '../components/common/Layout';
import { SHADOW_STYLES } from '../utils/constants';

type UnderConstructionNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UnderConstruction'
>;

interface Props {
  navigation: UnderConstructionNavigationProp;
}

const UnderConstruction: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout safeView={false}>
      <View className="flex-1 bg-gradient-to-b from-gray-50 to-white px-5 pt-16 pb-8">
        {/* Main Content */}
        <View className="flex-1 justify-center items-center">
          {/* Icon Container */}
          <View
            className="bg-white rounded-full w-40 h-40 items-center justify-center mb-8"
            style={SHADOW_STYLES.large}
          >
            <View className="bg-primary-red/10 rounded-full w-32 h-32 items-center justify-center">
              <Text className="text-6xl">🚧</Text>
            </View>
          </View>

          {/* Title */}
          <Text className="text-gray-800 text-3xl font-ubuntu-bold text-center mb-4">
            Dalam Pengembangan
          </Text>

          {/* Subtitle */}
          <Text className="text-gray-500 text-base font-roboto text-center mb-8 leading-6 px-4">
            Fitur ini sedang dalam tahap pengembangan.{'\n'}
            Kami akan segera meluncurkannya untuk Anda!
          </Text>

          {/* Info Cards */}
          <View className="w-full space-y-3 mb-8">
            <View
              className="bg-white rounded-2xl p-4 flex-row items-center"
              style={SHADOW_STYLES.small}
            >
              <View className="bg-blue-100 rounded-full w-12 h-12 items-center justify-center mr-4">
                <Text className="text-2xl">⚡</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 text-sm font-roboto-bold mb-1">
                  Sedang Dikembangkan
                </Text>
                <Text className="text-gray-500 text-xs font-roboto">
                  Tim kami sedang bekerja keras
                </Text>
              </View>
            </View>

            <View
              className="bg-white rounded-2xl p-4 flex-row items-center"
              style={SHADOW_STYLES.small}
            >
              <View className="bg-green-100 rounded-full w-12 h-12 items-center justify-center mr-4">
                <Text className="text-2xl">🎯</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 text-sm font-roboto-bold mb-1">
                  Segera Hadir
                </Text>
                <Text className="text-gray-500 text-xs font-roboto">
                  Nantikan pembaruan selanjutnya
                </Text>
              </View>
            </View>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-primary-red rounded-xl py-4 w-full"
            style={SHADOW_STYLES.medium}
            activeOpacity={0.8}
          >
            <Text className="text-white text-center text-base font-roboto-bold">
              Kembali ke Beranda
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="items-center pt-4">
          <Text className="text-gray-400 text-xs font-roboto-light">
            Terima kasih atas kesabaran Anda
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default UnderConstruction;
