import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  interpolate,
} from 'react-native-reanimated';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);
  const dotAnimation = useSharedValue(0);

  useEffect(() => {
    // Start entrance animations
    opacity.value = withTiming(1, { duration: 1000 });
    scale.value = withSpring(1, { damping: 8, stiffness: 100 });

    // Start dot animation
    dotAnimation.value = withRepeat(
      withTiming(1, { duration: 1500 }),
      -1,
      true,
    );

    // Navigate to main screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' as never }],
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, opacity, scale, dotAnimation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const dot1Style = useAnimatedStyle(() => {
    const dotOpacity = interpolate(
      dotAnimation.value,
      [0, 0.33, 0.66, 1],
      [0.3, 1, 0.3, 0.3],
    );
    return { opacity: dotOpacity };
  });

  const dot2Style = useAnimatedStyle(() => {
    const dotOpacity = interpolate(
      dotAnimation.value,
      [0, 0.33, 0.66, 1],
      [0.3, 0.3, 1, 0.3],
    );
    return { opacity: dotOpacity };
  });

  const dot3Style = useAnimatedStyle(() => {
    const dotOpacity = interpolate(
      dotAnimation.value,
      [0, 0.33, 0.66, 1],
      [0.3, 0.3, 0.3, 1],
    );
    return { opacity: dotOpacity };
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#111827" barStyle="light-content" />

      <Animated.View style={[styles.content, animatedStyle]}>
        {/* App Icon */}
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/sport-net.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>

        {/* App Name */}
        <Text style={styles.appName}>PB GASS</Text>
        <Text style={styles.tagline}>Badminton Community</Text>
      </Animated.View>

      {/* Animated Loading indicator */}
      <View style={styles.loadingContainer}>
        <Animated.View style={[styles.loadingDot, dot1Style]} />
        <Animated.View style={[styles.loadingDot, dot2Style]} />
        <Animated.View style={[styles.loadingDot, dot3Style]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#1f2937',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 15,
    borderWidth: 2,
    borderColor: '#374151',
  },
  icon: {
    width: 80,
    height: 80,
    tintColor: '#D84040',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  tagline: {
    fontSize: 18,
    color: '#9CA3AF',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 1.5,
    marginTop: 4,
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
  },
  loadingDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D84040',
    marginHorizontal: 6,
    shadowColor: '#D84040',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default SplashScreen;
