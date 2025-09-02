import { View } from 'react-native';
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
      <Button isBtnDisable={isBtnDisable} btnText="Simpan" onPress={onSave} />
    </View>
  );
}
