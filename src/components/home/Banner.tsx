import React from 'react';
import { Image, View, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Assets
import BannerOne from '../../assets/images/banner-1.png';
import BannerTwo from '../../assets/images/banner-2.png';
import BannerThree from '../../assets/images/banner-3.png';

const { width: screenWidth } = Dimensions.get('window');

const bannerData = [
  { id: '1', image: BannerOne },
  { id: '2', image: BannerTwo },
  { id: '3', image: BannerThree },
];

export function Banner() {
  return (
    <View className="w-full px-5 mt-6 mb-32">
      <View className="mb-4">
        <Text className="text-gray-800 text-lg font-ubuntu-bold px-1">
          Informasi & Promo
        </Text>
        <Text className="text-gray-500 text-sm font-roboto-regular px-1 mt-1">
          Dapatkan update terbaru seputar club
        </Text>
      </View>

      <Carousel
        loop
        width={screenWidth - 40}
        height={200}
        autoPlay
        autoPlayInterval={4000}
        data={bannerData}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.92,
          parallaxScrollingOffset: 60,
        }}
        pagingEnabled
        snapEnabled
        renderItem={({ item, index }) => {
          return (
            <View
              key={`banner-${index}`}
              className="w-full h-full rounded-2xl overflow-hidden"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 12,
                elevation: 6,
              }}
            >
              <Image
                source={item.image}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          );
        }}
      />
    </View>
  );
}
