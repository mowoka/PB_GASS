import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  ScrollView,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { RootStackParamList } from '../../types/navigation';
import { Layout } from '../../components/common/Layout';
import { Header } from '../../components/common/Header';
import { MatchItem } from '../../components/match/MatchItem';
import { useMatchHooks } from '../../hooks/matches/useMatch';
import { isDateOverCurrent } from '../../utils/func';
import { SHADOW_STYLES } from '../../utils/constants';
import PlusWhite from '../../assets/icons/plus-white.png';
import { useState, useMemo } from 'react';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Matches'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const ITEMS_PER_PAGE = 15;

export default function Matches({ navigation }: Props) {
  const { matchs, updateMatchExpired } = useMatchHooks();
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setCurrentPage(1);
    // Simulate refresh - you can add actual refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  // Sort matches by date (newest first)
  const sortedMatches = useMemo(() => {
    return [...matchs].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // Descending order
    });
  }, [matchs]);

  // Calculate paginated data
  const paginatedMatches = useMemo(() => {
    return sortedMatches.slice(0, currentPage * ITEMS_PER_PAGE);
  }, [sortedMatches, currentPage]);

  const hasMore = paginatedMatches.length < sortedMatches.length;
  const totalPages = Math.ceil(sortedMatches.length / ITEMS_PER_PAGE);

  const loadMore = () => {
    if (hasMore && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setLoadingMore(false);
      }, 500);
    }
  };

  const handleMatchPress = (item: (typeof matchs)[0]) => {
    if (item.status === 'Mendatang') {
      const isMatchExpired = isDateOverCurrent(new Date(item.date));
      if (isMatchExpired) updateMatchExpired(item.id);
    }
    navigation.push('MatchDetail', { id: item.id });
  };

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
      <View className="flex-1 bg-gray-50">
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          <View className="px-4 pt-5 pb-40">
            {/* Stats Header */}
            {sortedMatches.length > 0 && (
              <View className="bg-white rounded-2xl p-4 mb-5 shadow-sm border border-gray-200">
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-xs font-roboto-medium text-gray-500 mb-1">
                      Total Pertandingan
                    </Text>
                    <Text className="text-2xl font-ubuntu-bold text-gray-800">
                      {sortedMatches.length}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-xs font-roboto-medium text-gray-500 mb-1 text-right">
                      Halaman
                    </Text>
                    <Text className="text-2xl font-ubuntu-bold text-gray-800 text-right">
                      {currentPage} / {totalPages}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* Empty State */}
            {sortedMatches.length === 0 ? (
              <View className="flex-1 justify-center items-center py-20">
                <Text className="text-6xl mb-4">🏸</Text>
                <Text className="text-xl font-ubuntu-bold text-gray-700 mb-2">
                  Belum Ada Pertandingan
                </Text>
                <Text className="text-sm font-roboto text-gray-500 text-center px-8">
                  Buat pertandingan baru dengan menekan tombol + di atas
                </Text>
              </View>
            ) : (
              <>
                {/* Match List */}
                {paginatedMatches.map((item, index) => (
                  <MatchItem
                    key={item.id || index}
                    match={item}
                    onPress={() => handleMatchPress(item)}
                  />
                ))}

                {/* Load More Button */}
                {hasMore && (
                  <View className="mt-4 mb-6">
                    <TouchableOpacity
                      onPress={loadMore}
                      disabled={loadingMore}
                      className="bg-white border-2 border-gray-200 rounded-xl py-4 px-6 flex-row items-center justify-center"
                      style={SHADOW_STYLES.card}
                    >
                      {loadingMore ? (
                        <>
                          <ActivityIndicator
                            size="small"
                            color="#4B5563"
                            className="mr-2"
                          />
                          <Text className="text-base font-roboto-bold text-gray-700">
                            Memuat...
                          </Text>
                        </>
                      ) : (
                        <>
                          <Text className="text-base font-roboto-bold text-gray-700 mr-2">
                            Muat Lebih Banyak
                          </Text>
                          <Text className="text-sm font-roboto-medium text-gray-500">
                            ({sortedMatches.length - paginatedMatches.length}{' '}
                            tersisa)
                          </Text>
                        </>
                      )}
                    </TouchableOpacity>
                  </View>
                )}

                {/* End of List Indicator */}
                {!hasMore && sortedMatches.length > ITEMS_PER_PAGE && (
                  <View className="py-6">
                    <View className="flex-row items-center justify-center">
                      <View className="flex-1 border-b border-gray-300" />
                      <Text className="px-4 text-xs font-roboto-medium text-gray-500">
                        Akhir dari daftar
                      </Text>
                      <View className="flex-1 border-b border-gray-300" />
                    </View>
                  </View>
                )}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
