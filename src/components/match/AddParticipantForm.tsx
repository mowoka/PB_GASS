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
    <View className="w-full h-full flex flex-col justify-between items-center pb-10">
      <View className="flex-1 w-full">
        {/* Title */}
        <View className="mb-5">
          <Text className="font-roboto-bold text-xl text-gray-800 text-center">
            Tambah Partisipan
          </Text>
          <Text className="font-roboto text-sm text-gray-500 text-center mt-1">
            Isi informasi kategori partisipan
          </Text>
        </View>

        {/* Error Message */}
        {error.show && (
          <View className="mb-4 bg-red-50 border-l-4 border-primary-red rounded-lg p-3">
            <Text className="font-roboto-medium text-sm text-primary-red">
              ⚠️ {error.message}
            </Text>
          </View>
        )}

        {/* Form Fields */}
        <InputDropdown
          label="Level Pemain"
          placeholder="Pilih Level Pemain"
          value={form.playerLevel}
          options={playerLevelsOptions}
          onChange={item => setForm(prev => ({ ...prev, playerLevel: item }))}
        />
        <InputDropdown
          inputClass="mt-4"
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
          containerClass="mt-4"
          label="Total Partisipasi"
          placeholder="Masukkan jumlah partisipan"
          value={form.attendance === 0 ? '' : form.attendance.toString()}
          onChange={value => {
            if (value === '') {
              setForm(prev => ({ ...prev, attendance: 0 }));
              return;
            }
            setForm(prev => ({ ...prev, attendance: parseInt(value, 10) }));
          }}
          inputProps={{
            maxLength: 2,
            keyboardType: 'numeric',
          }}
          mode="bottom-sheet"
        />
      </View>

      <View className="w-full mt-4">
        <Button
          isBtnDisable={isBtnDisable}
          btnText="Simpan Partisipan"
          onPress={onSubmit}
        />
      </View>
    </View>
  );
}
