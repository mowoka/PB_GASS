import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useAddParticipantHooks } from '../../hooks/register/useAddParticipant';
import { ScrollView, View } from 'react-native';
import { MatchDescriptionCard } from '../../components/common/MatchDescription';
import { Participan } from '../../components/register/Participant';
import { BottomModal } from '../../components/common/BottomModal';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { AddParticipantForm } from '../../components/register/AddParticipantForm';

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
        <ScrollView className="flex-1">
          <View className="flex-1">
            <MatchDescriptionCard
              date={match.date}
              start_time={match.start_time}
              end_time={match.end_time}
              field={match.field}
              total_field={match.total_field.toString()}
              participants={match.participants}
            />
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
