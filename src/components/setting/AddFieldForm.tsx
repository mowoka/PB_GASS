import { Text, View } from 'react-native';
import { Input } from '../common/Input';
import { IField } from '../../stores/useSettings';
import { Button } from '../common/Button';

interface IAddFieldFormProps {
  field: IField;
  onChange: (key: 'name' | 'link_map' | 'address', value: string) => void;
  onSave: () => void;
  isBtnDisable?: boolean;
}

export function AddFieldForm({
  field,
  onChange,
  onSave,
  isBtnDisable = false,
}: IAddFieldFormProps) {
  return (
    <View className="w-full h-full flex flex-col justify-between items-center px-5 pt-5 pb-20">
      <View className="flex-1 w-full">
        <View className="flex flex-row items-center mb-5">
          <View className="w-10 h-10 bg-green-100 rounded-full flex justify-center items-center mr-3">
            <Text className="text-xl">🏟️</Text>
          </View>
          <Text className="font-roboto-bold text-xl text-gray-800">
            Tambah Lapangan
          </Text>
        </View>
        <Input
          label="Nama Lapangan"
          placeholder="Input Nama Lapangan"
          value={field.name}
          onChange={value => onChange('name', value)}
          inputProps={{
            maxLength: 30,
          }}
        />
        <Input
          containerClass="mt-5"
          label="Link Map Alamat Lapangan"
          placeholder="Input Link Map Alamat Lapangan"
          value={field.link_map}
          onChange={value => onChange('link_map', value)}
          inputProps={{
            maxLength: 30,
          }}
        />
        <Input
          containerClass="mt-5"
          label="Alamat Lapangan"
          placeholder="Input Alamat Lapangan"
          value={field.address}
          onChange={value => onChange('address', value)}
          inputProps={{
            maxLength: 200,
            multiline: true,
            numberOfLines: 4,
          }}
        />
      </View>
      <Button isBtnDisable={isBtnDisable} btnText="Simpan" onPress={onSave} />
    </View>
  );
}
