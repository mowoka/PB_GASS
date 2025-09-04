import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useMatchDetailHooks } from '../../hooks/matches/useMatchDetail';
import { View } from 'react-native';
import { MatchSchedule } from '../../components/match/MatchSchedule';
import { Divider } from '../../components/common/Divider';
import { MatchDescription } from '../../components/match/MatchDescription';

type MatchDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MatchDetail'
>;

interface Props {
  navigation: MatchDetailScreenNavigationProp;
}

export function MatchDetailScreen({ navigation }: Props) {
  const { match } = useMatchDetailHooks({
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
      <View className="flex-1">
        <MatchSchedule
          date={match.date}
          startTime={match.start_time}
          endTime={match.end_time}
          location={match.field.name}
        />
        <Divider dividerClass="mt-5" />
        <MatchDescription
          field={match.field}
          date={match.date}
          start_time={match.start_time}
          end_time={match.end_time}
          total_field={match.total_field.toString()}
          participants={match.participants}
        />
        <Divider dividerClass="mt-5" />
      </View>
    </Layout>
  );
}
