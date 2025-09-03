import { Text, View } from 'react-native';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { InputDropdown } from '../common/InputDropdown';
import { useState } from 'react';
import { IParticipant } from '../../stores/useMatch';
import { useSettingStore } from '../../stores/useSettings';
import { DEFAULT_PARTICIPANT } from '../../hooks/matches/useCreateMatch';

interface IAddParticipantFormProps {
  onSave: (form: IParticipant) => void;
  isBtnDisable?: boolean;
}

export function AddParticipantForm({
  onSave,
  isBtnDisable = false,
}: IAddParticipantFormProps) {
  const playerLevelsOptions = useSettingStore(state => state.playerLevels);

  const [form, setForm] = useState<IParticipant>(DEFAULT_PARTICIPANT);
  const [error, setError] = useState<{ show: boolean; message: string }>({
    show: false,
    message: '',
  });

  const onSubmit = () => {
    if (form.playerLevel.id === '') {
      setError({ show: true, message: 'Level Pemain harus diisi' });
      return;
    }

    if (form.attendance <= 0) {
      setError({ show: true, message: 'Total Partisipasi harus diisi' });
      return;
    }

    onSave(form);
    setForm(DEFAULT_PARTICIPANT);
  };

  return (
    <View className="w-full h-full  flex flex-col justify-between items-center">
      {error.show && (
        <View className="mb-2 w-full">
          <Text className="text-center text-primary-red">{error.message}</Text>
        </View>
      )}
      <View className="flex-1 w-full">
        <InputDropdown
          label="Lavel Pemain"
          placeholder="Pilih Level Pemain"
          value={form.playerLevel}
          options={playerLevelsOptions}
          onChange={item => setForm(prev => ({ ...prev, playerLevel: item }))}
        />
        <InputDropdown
          inputClass="mt-5"
          label="Gender Pemain"
          placeholder="Pilih Gender"
          value={
            form.gender === 'Cowo'
              ? { id: '1', name: 'Cowo' }
              : { id: '2', name: 'Cewe' }
          }
          options={[
            { id: '1', name: 'Cowo' },
            { id: '2', name: 'Cewe' },
          ]}
          onChange={item => {
            setForm(prev => ({
              ...prev,
              gender: item.id === '1' ? 'Cowo' : 'Cewe',
            }));
          }}
        />
        <Input
          containerClass="mt-5"
          label="Total Partisipasi"
          placeholder="Input Total Partisipasi"
          value={form.attendance.toString()}
          onChange={value => {
            if (value === '') {
              setForm(prev => ({ ...prev, attendance: 0 }));
              return;
            }
            setForm(prev => ({ ...prev, attendance: parseInt(value) }));
          }}
          inputProps={{
            maxLength: 2,
          }}
        />
      </View>
      <Button isBtnDisable={isBtnDisable} btnText="Simpan" onPress={onSubmit} />
    </View>
  );
}
