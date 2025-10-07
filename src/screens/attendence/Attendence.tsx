import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';

type AttendanceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Attendance'
>;

interface Props {
  navigation: AttendanceScreenNavigationProp;
}

export default function Attendence({ navigation }: Props) {
  return (
    <Layout safeView={false}>
      <Header title="Kehadiran" onPress={() => navigation.goBack()} />
    </Layout>
  );
}
