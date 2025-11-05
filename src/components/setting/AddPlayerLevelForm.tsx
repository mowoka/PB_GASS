import { Text, View } from 'react-native';
import { IPlayerLevel } from '../../stores/useSettings';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

interface IAddPlayerLevelFormProps {
  playerLevel: IPlayerLevel;
  onChange: (key: 'name', value: string) => void;
  onSave: () => void;
  isBtnDisable?: boolean;
}

export function AddPlayerLevelForm({
  playerLevel,
  onChange,
  onSave,
  isBtnDisable = false,
}: IAddPlayerLevelFormProps) {
  return (
    <View className="w-full h-full flex flex-col justify-between items-center px-5 pt-5 pb-20">
      <View className="flex-1 w-full">
        <View className="flex flex-row items-center mb-5">
          <View className="w-10 h-10 bg-purple-100 rounded-full flex justify-center items-center mr-3">
            <Text className="text-xl">⭐</Text>
          </View>
          <Text className="font-roboto-bold text-xl text-gray-800">
            Tambah Level Pemain
          </Text>
        </View>
        <Input
          label="Level Pemain"
          placeholder="Input Level Pemain"
          value={playerLevel.name}
          onChange={value => onChange('name', value)}
          inputProps={{
            maxLength: 20,
          }}
        />
      </View>
      <Button isBtnDisable={isBtnDisable} btnText="Simpan" onPress={onSave} />
    </View>
  );
}
