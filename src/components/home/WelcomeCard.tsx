import { Text, TouchableOpacity, View } from 'react-native';

export function WelcomeCard({ onCreateMatch }: { onCreateMatch: () => void }) {
  return (
    <View className="bg-black w-full rounded-b-[20px] shadow-lg px-5 h-[350px] pt-[50px]">
      <Text className="text-left text-white text-4xl font-ubuntu-bold">
        Welcome
      </Text>
      <Text className="text-left text-white text-2xl font-ubuntu-bold mt-1">
        PB GASS Badminton
      </Text>
      <Text className="mt-1 text-white text-base font-ubuntu-medium">
        Admin
      </Text>
      <TouchableOpacity
        onPress={onCreateMatch}
        className="mt-5 w-full h-12 rounded-xl flex justify-center items-center bg-primary-red"
      >
        <Text className="text-white uppercase font-roboto-bold">
          Buat Pertandingan
        </Text>
      </TouchableOpacity>
    </View>
  );
}
