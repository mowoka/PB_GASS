import { ScrollView, View } from 'react-native';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { useConfirmPaymentHooks } from '../../hooks/payment/useConfirmPayment';
import { MatchDescriptionCard } from '../../components/common/MatchDescription';
import { ParticipantItem } from '../../components/payment/ParticipantItem';
import { BottomModal } from '../../components/common/BottomModal';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { PaymentModal } from '../../components/payment/PaymentModal';

type ConfirmPaymentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ConfirmPayment'
>;

interface Props {
  navigation: ConfirmPaymentScreenNavigationProp;
}

export default function ConfirmPayment({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();
  const { match, participants, onSubmit, handlePlayerPayment } =
    useConfirmPaymentHooks({
      id:
        navigation
          .getState()
          .routes.find(route => route.name === 'ConfirmPayment')?.params?.id ??
        '',
      openBottomModal: openModal,
      hideBottomModal: closeModal,
    });

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      modalChildren={<PaymentModal onSelectPaymentMethod={onSubmit} />}
    >
      <Layout safeView={false}>
        <Header title={match.field.name} onPress={() => navigation.goBack()} />
        <ScrollView className="flex-1">
          <MatchDescriptionCard
            date={match.date}
            start_time={match.start_time}
            end_time={match.end_time}
            field={match.field}
            total_field={match.total_field.toString()}
            participants={match.participants}
          />
          <View className="px-5">
            {participants.map((participant, index) => {
              return (
                <ParticipantItem
                  key={index}
                  participant={participant}
                  onConfirmPayment={player_id =>
                    handlePlayerPayment(participant.id, player_id)
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
