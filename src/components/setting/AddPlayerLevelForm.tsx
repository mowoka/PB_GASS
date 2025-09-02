import { Text, TouchableOpacity, View } from 'react-native';
import { IPlayerLevel } from '../../stores/useSettings';
import { cn } from '../../utils/func';
import { Input } from '../common/Input';

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
    <View className="w-full h-full  flex flex-col justify-between items-center">
      <View className="flex-1 w-full">
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
      <TouchableOpacity
        onPress={onSave}
        disabled={isBtnDisable}
        className={cn(
          'h-[47px] w-full  flex justify-center items-center rounded-lg',
          isBtnDisable ? 'bg-primary-gray' : 'bg-black',
        )}
      >
        <Text className="text-white font-roboto-bold text-base">Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}
