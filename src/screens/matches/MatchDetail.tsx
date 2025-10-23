import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useMatchDetailHooks } from '../../hooks/matches/useMatchDetail';
import { ScrollView, View } from 'react-native';
import { MatchSchedule } from '../../components/match/MatchSchedule';
import { Divider } from '../../components/common/Divider';
import { MatchDescription } from '../../components/match/MatchDescription';
import { MatchParticipant } from '../../components/match/MatchParticipant';
import { ButtonActions } from '../../components/match/ButtonActions';
import { PaymentResult } from '../../components/match/PaymentResult';

type MatchDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MatchDetail'
>;

interface Props {
  navigation: MatchDetailScreenNavigationProp;
}

export function MatchDetailScreen({ navigation }: Props) {
  const {
    match,
    showEditParticipant,
    showConfirmAttendance,
    isMatchFinished,
    isMatchExpired,
    showButtomBottomScreen,
    totalEarnings,
    qrisPaymentCount,
    cashPaymentCount,
    onStartMatch,
    onEndMatch,
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
        onPress={() => navigation.goBack()}
      />
      <ScrollView className="flex-1">
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
          {!isMatchFinished && <Divider dividerClass="mt-5" />}
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
