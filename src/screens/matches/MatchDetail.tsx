import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useMatchDetailHooks } from '../../hooks/matches/useMatchDetail';

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
    </Layout>
  );
}
