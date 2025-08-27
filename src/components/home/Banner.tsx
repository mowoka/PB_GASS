import React, { useRef, useEffect } from 'react';
import {
  Image,
  View,
  Dimensions,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

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
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollViewRef.current) {
        const nextIndex = (currentIndex + 1) % bannerData.length;
        scrollViewRef.current.scrollTo({
          x: nextIndex * (screenWidth - 32),
          animated: true,
        });
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (screenWidth - 32));
    setCurrentIndex(index);
  };

  return (
    <View className="w-full mt-5">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="rounded-lg"
      >
        {bannerData.map(item => (
          <View
            key={item.id}
            style={{ width: screenWidth - 32 }}
            className="h-48 rounded-lg overflow-hidden"
          >
            <Image
              source={item.image}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      {/* Pagination dots */}
      <View className="flex-row justify-center mt-4">
        {bannerData.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );
}
