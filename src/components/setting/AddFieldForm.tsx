import { View } from 'react-native';
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
    <View className="w-full h-full  flex flex-col justify-between items-center">
      <View className="flex-1 w-full">
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
          label="Link Map Alamat Lapangan"
          placeholder="Input Link Map Alamat Lapangan"
          value={field.link_map}
          onChange={value => onChange('link_map', value)}
          inputProps={{
            maxLength: 30,
          }}
        />
        <Input
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
