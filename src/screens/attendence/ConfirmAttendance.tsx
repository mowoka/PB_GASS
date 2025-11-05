import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useConfirmAttendance } from '../../hooks/attendance/useConfirmAttendance';
import { ScrollView, Text, View } from 'react-native';
import { MatchDescriptionCard } from '../../components/common/MatchDescription';
import { ParticipantItem } from '../../components/attendance/ParticipantItem';
import { useSnackbar } from '../../providers/snakbar';
import { SHADOW_STYLES } from '../../utils/constants';

type ConfirmAttendanceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ConfirmAttendance'
>;

interface Props {
  navigation: ConfirmAttendanceScreenNavigationProp;
}

export default function ConfirmAttendance({ navigation }: Props) {
  const { handleShow, handleClose } = useSnackbar();
  const {
    match,
    participants,
    isParticipantChange,
    onConfirmParticipant,
    onSubmit,
  } = useConfirmAttendance({
    id:
      navigation
        .getState()
        .routes.find(route => route.name === 'ConfirmAttendance')?.params?.id ??
      '',
    backButton: () => navigation.goBack(),
  });

  const totalParticipants = participants.reduce(
    (acc, p) => acc + p.players.length,
    0,
  );
  const totalConfirmed = participants.reduce(
    (acc, p) =>
      acc + p.players.filter(player => player.match_attendance).length,
    0,
  );

  return (
    <Layout
      safeView={false}
      showBottomBtn={true}
      bottomBtnText="Simpan"
      onPressBtn={onSubmit}
    >
      <Header
        title={match.field.name}
        onPress={() => {
          if (!isParticipantChange) {
            navigation.goBack();
            return;
          }
          handleShow({
            show: true,
            autohide: false,
            title: 'Peringatan',
            message: `Apakah Anda yakin untuk kembali? Data yang belum disimpan akan hilang.`,
            onCancel: handleClose,
            onPress: () => {
              handleClose();
              navigation.goBack();
            },
          });
        }}
      />
      <ScrollView className="flex-1 bg-gray-50">
        {/* Match Description Card */}
        <View
          className="mx-4 mt-4 bg-white rounded-2xl"
          style={SHADOW_STYLES.mediumElevated}
        >
          <MatchDescriptionCard
            date={match.date}
            start_time={match.start_time}
            end_time={match.end_time}
            field={match.field}
            total_field={match.total_field.toString()}
            participants={match.participants}
          />
        </View>

        {/* Attendance Summary */}
        <View className="px-4 pt-6 pb-3">
          <Text className="font-ubuntu-bold text-xl text-gray-900">
            Konfirmasi Kehadiran
          </Text>
          <View className="flex-row items-center mt-2">
            <View className="bg-green-50 px-3 py-1.5 rounded-lg mr-2">
              <Text className="font-roboto-bold text-sm text-green-700">
                {totalConfirmed} Hadir
              </Text>
            </View>
            <View className="bg-gray-100 px-3 py-1.5 rounded-lg">
              <Text className="font-roboto-bold text-sm text-gray-700">
                {totalParticipants - totalConfirmed} Belum Konfirmasi
              </Text>
            </View>
          </View>
        </View>

        {/* Participants List */}
        <View className="px-4 pb-6">
          {participants.map((participant, index) => {
            return (
              <ParticipantItem
                key={index}
                participant={participant}
                onConfirmParticipant={onConfirmParticipant}
              />
            );
          })}
        </View>
      </ScrollView>
    </Layout>
  );
}
