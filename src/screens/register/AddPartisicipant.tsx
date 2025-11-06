import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useAddParticipantHooks } from '../../hooks/register/useAddParticipant';
import { ScrollView, Text, View } from 'react-native';
import { MatchDescriptionCard } from '../../components/common/MatchDescription';
import { Participan } from '../../components/register/Participant';
import { BottomModal } from '../../components/common/BottomModal';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { AddParticipantForm } from '../../components/register/AddParticipantForm';
import { SHADOW_STYLES } from '../../utils/constants';

type AddParticipantScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddParticipant'
>;

interface Props {
  navigation: AddParticipantScreenNavigationProp;
}

export default function AddParticipant({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();
  const {
    match,
    form,
    handleAddParticipant,
    handleChangePlayerName,
    handleSubmitParticipant,
    handleEditParticipant,
  } = useAddParticipantHooks({
    id:
      navigation
        .getState()
        .routes.find(route => route.name === 'AddParticipant')?.params?.id ??
      '',
    onOpenModal: openModal,
  });

  const totalRegistered = match.participants.reduce(
    (acc, p) => acc + p.players.filter(player => player.name !== '').length,
    0,
  );
  const totalSlots = match.participants.reduce(
    (acc, p) => acc + p.attendance,
    0,
  );

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      modalChildren={
        <AddParticipantForm
          form={form}
          onChange={value => {
            handleChangePlayerName(value);
          }}
          onSubmit={() => {
            handleSubmitParticipant();
            closeModal();
          }}
        />
      }
    >
      <Layout safeView={true}>
        <Header
          title={match.field.name}
          hideBackButton={false}
          onPress={() => navigation.goBack()}
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

          {/* Participant Summary */}
          <View className="px-4 pt-6 pb-3">
            <Text className="font-ubuntu-bold text-xl text-gray-900">
              Tambah Partisipasi
            </Text>
            <View className="flex-row items-center mt-2">
              <View className="bg-blue-50 px-3 py-1.5 rounded-lg mr-2">
                <Text className="font-roboto-bold text-sm text-blue-700">
                  {totalRegistered} Terdaftar
                </Text>
              </View>
              <View className="bg-gray-100 px-3 py-1.5 rounded-lg">
                <Text className="font-roboto-bold text-sm text-gray-700">
                  {totalSlots} Slot Total
                </Text>
              </View>
            </View>
          </View>

          {/* Participants List */}
          <View className="px-4 pb-6">
            {match.participants.map((item, index) => {
              return (
                <Participan
                  key={index}
                  participant={item}
                  onAddParticipant={(participantId, playerId) => {
                    handleAddParticipant(match.id, participantId, playerId);
                  }}
                  onEditParticipant={(participantId, playerId, playerName) =>
                    handleEditParticipant(
                      match.id,
                      participantId,
                      playerId,
                      playerName,
                    )
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </Layout>
    </BottomModal>
  );
}
