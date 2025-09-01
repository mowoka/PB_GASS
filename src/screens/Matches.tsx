import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { Layout } from '../components/common/Layout';
import { Header } from '../components/common/Header';
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
      <View className="flex-1 bg-white">
        <ScrollView>
          <View className="p-5">
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
            <MatchItem />
          </View>
        </ScrollView>
      </View>
      <View className="bg-black px-5 pt-5 pb-8 w-full">
        <TouchableOpacity
          onPress={() => navigation.push('CreateMatch')}
          className="w-full bg-primary-red h-[48px] rounded-lg flex justify-center items-center"
        >
          <Text className="text-white font-bold text-base">
            Buat Pertandigan
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
