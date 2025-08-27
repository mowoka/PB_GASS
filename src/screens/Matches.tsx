import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { MatchItem } from '../components/match/MatchItem';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Matches'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function Matches({ navigation }: Props) {
  return (
    <Layout safeView={false}>
      <Header title="Pertandigan" onPress={() => navigation.goBack()} />
      <View className="p-5">
        <MatchItem />
      </View>
    </Layout>
  );
}
