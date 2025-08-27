import React from 'react';
import { Image, View, Dimensions } from 'react-native';
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
    <View className="w-full mt-5">
      <Carousel
        loop
        width={screenWidth - 40}
        height={180}
        autoPlay
        autoPlayInterval={3000}
        data={bannerData}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        pagingEnabled
        snapEnabled
        renderItem={({ item, index }) => {
          return (
            <View
              key={`banner-${index}`}
              className="w-full h-full rounded-lg overflow-hidden"
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
