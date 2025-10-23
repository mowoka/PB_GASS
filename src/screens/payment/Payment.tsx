import { View } from 'react-native';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { MatchItem } from '../../components/common/MatchItem';
import { usePaymentHooks } from '../../hooks/payment/usePayment';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type PaymentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Payment'
>;

interface Props {
  navigation: PaymentScreenNavigationProp;
}

export default function Payment({ navigation }: Props) {
  const { matches } = usePaymentHooks();

  return (
    <Layout safeView={false}>
      <Header title="Pembayaran" onPress={() => navigation.goBack()} />
      <View className="px-5 mt-10">
        {matches.map((item, index) => {
          return (
            <MatchItem
              match={item}
              key={index}
              onPress={() => navigation.push('ConfirmPayment', { id: item.id })}
            />
          );
        })}
      </View>
    </Layout>
  );
}
