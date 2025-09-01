import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../common/Input';

export function AddFieldForm() {
  return (
    <View className="w-full h-full  flex flex-col justify-between items-center">
      <View className="flex-1 w-full">
        <Input
          label="Nama Lapangan"
          placeholder="Input Nama Lapangan"
          value=""
          onChange={() => {}}
          inputProps={{
            maxLength: 30,
          }}
        />
        <Input
          label="Link Maps Lapangan"
          placeholder="Input Link Maps Lapangan"
          value=""
          onChange={() => {}}
          inputProps={{
            maxLength: 30,
          }}
        />
        <Input
          label="Alamat Lapangan"
          placeholder="Input Alamat Lapangan"
          value=""
          onChange={() => {}}
          inputProps={{
            maxLength: 200,
            multiline: true,
            numberOfLines: 4,
          }}
        />
      </View>
      <TouchableOpacity className="h-[47px] w-full bg-black flex justify-center items-center rounded-lg">
        <Text className="text-white font-roboto-bold text-base">Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}
