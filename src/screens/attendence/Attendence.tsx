import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { useAttendanceHooks } from '../../hooks/attendance/useAttendance';
import { View } from 'react-native';
import { MatchItem } from '../../components/common/MatchItem';

type AttendanceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Attendance'
>;

interface Props {
  navigation: AttendanceScreenNavigationProp;
}

export default function Attendence({ navigation }: Props) {
  const { matches } = useAttendanceHooks();

  return (
    <Layout safeView={false}>
      <Header title="Kehadiran" onPress={() => navigation.goBack()} />
      <View className="px-5 mt-10">
        {matches.map((item, index) => {
          return <MatchItem match={item} key={index} onPress={() => {}} />;
        })}
      </View>
    </Layout>
  );
}
