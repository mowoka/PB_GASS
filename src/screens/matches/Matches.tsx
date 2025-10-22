import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, ScrollView, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation';
import { Layout } from '../../components/common/Layout';
import { Header } from '../../components/common/Header';
import { MatchItem } from '../../components/match/MatchItem';
import { useMatchHooks } from '../../hooks/matches/useMatch';
import { isDateOverCurrent } from '../../utils/func';
import PlusWhite from '../../assets/icons/plus-white.png';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Matches'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function Matches({ navigation }: Props) {
  const { matchs, updateMatchExpired } = useMatchHooks();

  return (
    <Layout safeView={false}>
      <Header
        title="Pertandingan"
        onPress={() => navigation.goBack()}
        showRightIcon={true}
        rightIcon={
          <Image
            source={PlusWhite}
            width={40}
            height={40}
            className="w-[35px] h-[35px]"
          />
        }
        onPressRightIcon={() => navigation.push('CreateMatch')}
      />
      <View className="flex-1 bg-white">
        <ScrollView>
          <View className="p-5">
            {matchs.map((item, index) => {
              return (
                <MatchItem
                  key={index}
                  match={item}
                  onPress={() => {
                    if (item.status === 'Mendatang') {
                      const isMatchExpired = isDateOverCurrent(
                        new Date(item.date),
                      );
                      if (isMatchExpired) updateMatchExpired(item.id);
                    }
                    navigation.push('MatchDetail', { id: item.id });
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
