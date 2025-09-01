import { Layout } from '../components/common/Layout';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../components/common/Header';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateMatch'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function CreateMatchScreen({ navigation }: Props) {
  return (
    <Layout safeView={false}>
      <Header title="Buat Pertandingan" onPress={() => navigation.goBack()} />
    </Layout>
  );
}
