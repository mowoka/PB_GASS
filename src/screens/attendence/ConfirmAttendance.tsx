import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useConfirmAttendance } from '../../hooks/attendance/useConfirmAttendance';
import { ScrollView, View } from 'react-native';
import { MatchDescriptionCard } from '../../components/common/MatchDescription';
import { ParticipantItem } from '../../components/attendance/ParticipantItem';

type ConfirmAttendanceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ConfirmAttendance'
>;

interface Props {
  navigation: ConfirmAttendanceScreenNavigationProp;
}

export default function ConfirmAttendance({ navigation }: Props) {
  const { match, participants } = useConfirmAttendance({
    id:
      navigation
        .getState()
        .routes.find(route => route.name === 'ConfirmAttendance')?.params?.id ??
      '',
  });

  return (
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
            return <ParticipantItem key={index} participant={participant} />;
          })}
        </View>
      </ScrollView>
    </Layout>
  );
}
