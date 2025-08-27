import { Layout } from '../components/Layout';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../components/Header';

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
