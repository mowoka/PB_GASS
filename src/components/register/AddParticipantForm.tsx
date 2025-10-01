import { View } from 'react-native';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { IAddParticipantForm } from '../../hooks/register/useAddParticipant';

interface iAddParticipantFormProps {
  form: IAddParticipantForm;
  onChange: (name: string) => void;
  onSubmit: () => void;
}

export function AddParticipantForm({
  form,
  onChange,
  onSubmit,
}: iAddParticipantFormProps) {
  return (
    <View className="w-full flex-1 flex flex-col justify-between items-center">
      <View className="flex-1 w-full">
        <Input
          label="Nama Peserta"
          value={form.player.name}
          onChange={value => onChange(value)}
          placeholder="Input nama peserta"
          mode="bottom-sheet"
        />
      </View>
      <Button btnText="Simpan" onPress={onSubmit} btnClass="mt-5" />
    </View>
  );
}
