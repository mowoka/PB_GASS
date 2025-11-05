import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useMatchDetailHooks } from '../../hooks/matches/useMatchDetail';
import { Image, ScrollView, View } from 'react-native';
import { MatchSchedule } from '../../components/match/MatchSchedule';
import { MatchDescription } from '../../components/match/MatchDescription';
import { MatchParticipant } from '../../components/match/MatchParticipant';
import { ButtonActions } from '../../components/match/ButtonActions';
import { PaymentResult } from '../../components/match/PaymentResult';
import Racket from '../../assets/icons/racket.png';
import { useSidebar } from '../../providers/sidebar';
import { MatchForm } from '../../components/match/MatchForm';

type MatchDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MatchDetail'
>;

interface Props {
  navigation: MatchDetailScreenNavigationProp;
}

export function MatchDetailScreen({ navigation }: Props) {
  const { handleShow, isSidebarOpen, handleClose } = useSidebar();
  const {
    match,
    showEditParticipant,
    showConfirmAttendance,
    isMatchFinished,
    isMatchExpired,
    isMatchOngoing,
    showButtomBottomScreen,
    totalEarnings,
    qrisPaymentCount,
    cashPaymentCount,
    standbyPlayer,
    onStartMatch,
    onEndMatch,
    onSubmitMatch,
  } = useMatchDetailHooks({
    id:
      navigation.getState().routes.find(route => route.name === 'MatchDetail')
        ?.params?.id ?? '',
  });

  return (
    <Layout safeView={false}>
      <Header
        title={match.field.name}
        hideBackButton={false}
        onPress={() => (isSidebarOpen ? handleClose() : navigation.goBack())}
        showRightIcon={isMatchOngoing}
        onPressRightIcon={() =>
          handleShow({
            show: true,
            title: 'Pertandingan',
            content: (
              <MatchForm
                onSubmit={(players, matchType) => {
                  onSubmitMatch(players, matchType);
                  handleClose();
                }}
                standbyPlayer={standbyPlayer}
              />
            ),
          })
        }
        rightIcon={
          <Image
            source={Racket}
            width={40}
            height={40}
            className="w-[30px] h-[30px]"
          />
        }
      />
      <ScrollView className="flex-1 bg-gray-50">
        <View className="flex-1">
          <MatchSchedule
            date={match.date}
            startTime={match.start_time}
            endTime={match.end_time}
            location={match.field.name}
          />
          <MatchDescription
            field={match.field}
            status={match.status}
            date={match.date}
            start_time={match.start_time}
            end_time={match.end_time}
            total_field={match.total_field.toString()}
            participants={match.participants}
          />
          {isMatchFinished && (
            <PaymentResult
              totalEarnings={totalEarnings}
              qrisPaymentCount={qrisPaymentCount}
              cashPaymentCount={cashPaymentCount}
            />
          )}
          <MatchParticipant
            participants={match.participants}
            showEditParticipant={showEditParticipant}
            showConfirmAttendance={showConfirmAttendance}
            showPayment={isMatchFinished}
            disabled={isMatchExpired}
            showTotalPlayed={isMatchOngoing || isMatchFinished}
            onAddParticipant={() =>
              navigation.push('AddParticipant', { id: match.id })
            }
            onConfirmAttendance={() =>
              navigation.push('ConfirmAttendance', { id: match.id })
            }
            onConfirmPayment={() =>
              navigation.push('ConfirmPayment', { id: match.id })
            }
          />
        </View>
      </ScrollView>
      {showButtomBottomScreen && (
        <ButtonActions
          onStartMatch={onStartMatch}
          onEndMatch={onEndMatch}
          status={match.status}
        />
      )}
    </Layout>
  );
}
