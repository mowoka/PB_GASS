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
      <Input
        label="Nama peserta"
        placeholder="Input nama peserta"
        value={form.player.name}
        onChange={onChange}
        containerClass="w-full"
      />
      <Button btnText="Simpan" onPress={onSubmit} />
    </View>
  );
}
