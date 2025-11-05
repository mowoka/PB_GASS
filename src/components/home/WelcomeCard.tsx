import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function WelcomeCard({ onCreateMatch }: { onCreateMatch: () => void }) {
  return (
    <View className="w-full h-[380px] overflow-hidden rounded-b-[32px]">
      <LinearGradient
        colors={['#1a1a1a', '#2d2d2d', '#1a1a1a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full h-full px-6 pt-14"
      >
        {/* Decorative circles */}
        <View className="absolute -top-20 -right-20 w-48 h-48 bg-primary-red opacity-10 rounded-full" />
        <View className="absolute top-32 -left-16 w-32 h-32 bg-primary-red opacity-5 rounded-full" />

        {/* Content */}
        <View className="flex-1">
          <View className="mb-2">
            <Text className="text-white/60 text-sm font-roboto-medium uppercase tracking-wider">
              Selamat Datang
            </Text>
          </View>

          <Text className="text-white text-5xl font-ubuntu-bold leading-tight">
            PB GASS
          </Text>
          <Text className="text-white text-3xl font-ubuntu-medium mt-1 opacity-90">
            Badminton Club
          </Text>

          <View className="mt-4 flex-row items-center">
            <View className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            <Text className="text-white/80 text-base font-roboto-medium">
              Admin Dashboard
            </Text>
          </View>

          {/* Action Button */}
          <TouchableOpacity
            onPress={onCreateMatch}
            className="mt-8 w-full h-14 rounded-2xl overflow-hidden shadow-lg"
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#D84040', '#b83535']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="w-full h-full flex-row justify-center items-center"
            >
              <Text className="text-white text-base font-roboto-bold uppercase tracking-wide">
                + Buat Pertandingan Baru
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
