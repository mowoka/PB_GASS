import { Text, View } from 'react-native';
import { Layout } from '../components/Layout';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateMatch'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function CreateMatchScreen({ navigation }: Props) {
  return (
    <Layout>
      <View>
        <Text>Create Match</Text>
      </View>
    </Layout>
  );
}
