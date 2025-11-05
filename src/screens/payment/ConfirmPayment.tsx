import { ScrollView, Text, View } from 'react-native';
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
import { SHADOW_STYLES } from '../../utils/constants';

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

  const totalParticipants = participants.reduce(
    (acc, p) => acc + p.players.length,
    0,
  );
  const totalPaid = participants.reduce(
    (acc, p) => acc + p.players.filter(player => player.payment.is_paid).length,
    0,
  );

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      modalChildren={<PaymentModal onSelectPaymentMethod={onSubmit} />}
    >
      <Layout safeView={false}>
        <Header title={match.field.name} onPress={() => navigation.goBack()} />
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

          {/* Payment Summary */}
          <View className="px-4 pt-6 pb-3">
            <Text className="font-ubuntu-bold text-xl text-gray-900">
              Konfirmasi Pembayaran
            </Text>
            <View className="flex-row items-center mt-2">
              <View className="bg-green-50 px-3 py-1.5 rounded-lg mr-2">
                <Text className="font-roboto-bold text-sm text-green-700">
                  {totalPaid} Sudah Bayar
                </Text>
              </View>
              <View className="bg-amber-50 px-3 py-1.5 rounded-lg">
                <Text className="font-roboto-bold text-sm text-amber-700">
                  {totalParticipants - totalPaid} Belum Bayar
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
