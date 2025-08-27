import { Text, TouchableOpacity, View } from 'react-native';

export function WelcomeCard({ onCreateMatch }: { onCreateMatch: () => void }) {
  return (
    <View className="p-5 bg-white w-full rounded-xl shadow-lg border border-gray-300">
      <Text className="text-left text-black text-xl font-bold ">
        Selamat Datang Di PBGasss,
      </Text>
      <Text className="mt-2 text-black text-lg font-semibold">Admin</Text>
      <TouchableOpacity
        onPress={onCreateMatch}
        className="mt-5 w-full h-12 rounded-2xl flex justify-center items-center bg-[#D64545]"
      >
        <Text className="text-white uppercase font-bold">
          Buat Pertandingan
        </Text>
      </TouchableOpacity>
    </View>
  );
}
