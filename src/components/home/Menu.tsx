import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';

// Assets
import WhatsApp from '../../assets/icons/whatsapp.png';
import Contact from '../../assets/icons/contact.png';
import Register from '../../assets/icons/register-color.png';
import Attendance from '../../assets/icons/attendance.png';
import SportNet from '../../assets/icons/sport-net.png';
import Payment from '../../assets/icons/payment.png';
import History from '../../assets/icons/history-color.png';
import Setting from '../../assets/icons/setting-color.png';

export function Menu() {
  return (
    <View className="w-full p-5 relative -mt-32">
      <View className="bg-white px-1 py-3 rounded-xl">
        <View className="w-full flex flex-row justify-stretch items-start flex-wrap">
          <MenuItem name="Buat Pesan" image={WhatsApp} onPress={() => {}} />
          <MenuItem name="Kontak Member" image={Contact} onPress={() => {}} />
          <MenuItem name="Daftar Peserta" image={Register} onPress={() => {}} />
          <MenuItem
            name="Konfirmasi Partisipasi"
            image={Attendance}
            onPress={() => {}}
          />
          <MenuItem name="Bertanding" image={SportNet} onPress={() => {}} />
          <MenuItem name="Pembayaran" image={Payment} onPress={() => {}} />
          <MenuItem name="Riwayat" image={History} onPress={() => {}} />
          <MenuItem name="Pengaturan" image={Setting} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

function MenuItem({
  name,
  image,
  onPress,
}: {
  name: string;
  image: ImageSourcePropType;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className="flex flex-col justify-center items-center mb-5 mx-[5px] w-20"
      onPress={onPress}
    >
      <View className="bg-white rounded-full w-16 h-16 p-3 flex justify-center items-center border border-gray-200">
        <Image
          source={image}
          width={48}
          height={48}
          className="w-full h-full"
        />
      </View>
      <Text className="mt-2 text-xs font-medium text-center text-gray-600">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
