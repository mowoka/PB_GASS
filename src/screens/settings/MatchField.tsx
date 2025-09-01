import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';

type MatchFieldScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MatchField'
>;

interface Props {
  navigation: MatchFieldScreenNavigationProp;
}

export default function MatchField({ navigation }: Props) {
  return (
    <Layout safeView={false}>
      <Header
        title="Lapangan Pertandingan"
        onPress={() => navigation.goBack()}
      />
    </Layout>
  );
}
