import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Text, View, ScrollView } from 'react-native';
import { InputButton } from '../../components/common/InputButton';
import { BottomModal } from '../../components/common/BottomModal';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { Calendar } from '../../components/common/Calendar';
import { InputTimePicker } from '../../components/common/InputTimePicker';
import { useCreateMatchHooks } from '../../hooks/matches/useCreateMatch';
import { FieldOptions } from '../../components/common/FieldOptions';
import { ParticipanInput } from '../../components/match/ParticipanInput';
import { AddParticipantForm } from '../../components/match/AddParticipantForm';
import { Input } from '../../components/common/Input';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateMatch'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function CreateMatchScreen({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();
  const {
    error,
    match,
    fields,
    bottomMenu,
    bottomModalHeight,
    openBottomMenu,
    handleSelectField,
    handleSelectDate,
    addParticipant,
    deleteParticipant,
    handleOnChange,
    handleOnChangeDateTime,
    onSubmit,
  } = useCreateMatchHooks({
    openModal,
    backButton: () => navigation.goBack(),
  });

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      height={bottomModalHeight}
      modalChildren={
        <>
          {bottomMenu === 'calendar' && (
            <Calendar
              onPress={value => {
                if (value === undefined) return;
                handleSelectDate(value);
                closeModal();
              }}
            />
          )}
          {bottomMenu === 'field' && (
            <FieldOptions
              options={fields}
              onPress={value => {
                handleSelectField(value);
                closeModal();
              }}
            />
          )}
          {bottomMenu === 'participant' && (
            <AddParticipantForm
              onSave={form => {
                addParticipant(form);
                closeModal();
              }}
            />
          )}
        </>
      }
    >
      <Layout
        safeView={false}
        showBottomBtn={true}
        bottomBtnText="Simpan Pertandingan"
        onPressBtn={onSubmit}
      >
        <Header title="Buat Pertandingan" onPress={() => navigation.goBack()} />

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-5 pt-5 pb-5">
            {/* Info Card */}
            <View className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-5">
              <Text className="font-roboto-medium text-xs text-blue-800 leading-5">
                💡 <Text className="font-roboto-bold">Tips:</Text> Pastikan
                semua informasi sudah terisi dengan benar sebelum menyimpan
                pertandingan.
              </Text>
            </View>

            {/* Error Message */}
            {error.show && (
              <View className="mb-5 bg-red-50 border-l-4 border-primary-red rounded-lg p-4">
                <Text className="font-roboto-medium text-sm text-primary-red">
                  ⚠️ {error.message}
                </Text>
              </View>
            )}

            {/* Schedule Section */}
            <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
              <Text className="font-roboto-bold text-lg text-gray-800 mb-4">
                📅 Jadwal Pertandingan
              </Text>

              <InputButton
                label="Tanggal"
                value={match.date}
                onPress={() => openBottomMenu('calendar')}
                placeholder="Pilih Tanggal Pertandingan"
              />

              <InputTimePicker
                inputClass="mt-4"
                onChange={handleOnChangeDateTime}
              />
            </View>

            {/* Venue Section */}
            <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
              <Text className="font-roboto-bold text-lg text-gray-800 mb-4">
                📍 Lokasi & Lapangan
              </Text>

              <InputButton
                label="Tempat Pertandingan"
                value={match.field.name}
                placeholder="Pilih Tempat Pertandingan"
                onPress={() => openBottomMenu('field')}
              />

              <Input
                label="Total Lapangan"
                placeholder="Masukkan jumlah lapangan"
                onChange={value => {
                  if (value === '') {
                    handleOnChange('total_field', 0);
                    return;
                  }
                  handleOnChange('total_field', Number(value));
                }}
                value={
                  match.total_field === 0 ? '' : match.total_field.toString()
                }
                containerClass="mt-4"
                inputProps={{
                  maxLength: 2,
                  keyboardType: 'numeric',
                }}
              />
            </View>

            {/* Participants Section */}
            <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
              <Text className="font-roboto-bold text-lg text-gray-800 mb-4">
                👥 Daftar Partisipan
              </Text>

              <ParticipanInput
                label=""
                onAddParticipant={() => openBottomMenu('participant')}
                participants={match.participants}
                onDeleteParticipant={deleteParticipant}
              />
            </View>
          </View>
        </ScrollView>
      </Layout>
    </BottomModal>
  );
}
