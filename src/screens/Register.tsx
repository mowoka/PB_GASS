import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { Layout } from '../components/common/Layout';
import { Header } from '../components/common/Header';
import { useRegisterHooks } from '../hooks/register/useRegister';
import { MatchItem } from '../components/register/MatchItem';
import { Filter } from '../components/register/Filter';
import { BottomModal } from '../components/common/BottomModal';
import { useBottomModalHooks } from '../hooks/common/useBottomModal';
import { Calendar } from '../components/common/Calendar';

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

export default function RegisterScreen({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();
  const {
    matches,
    selectedDate,
    handleSelectDate,
    handleFilter,
    handleResetFilter,
  } = useRegisterHooks();

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      height={550}
      modalChildren={
        <Calendar
          onPress={value => {
            if (value === undefined) return;
            handleSelectDate(value);
            closeModal();
          }}
        />
      }
    >
      <Layout safeView={true}>
        <Header title="Pendaftaracdn" hideBackButton={true} />
        <View className="flex-1">
          <Filter
            filterValue={selectedDate}
            openDatePicker={openModal}
            onFilter={handleFilter}
            onResetFilter={handleResetFilter}
          />
          <View className="px-5 mt-10">
            {matches.map((item, index) => {
              return <MatchItem match={item} key={index} />;
            })}
          </View>
        </View>
      </Layout>
    </BottomModal>
  );
}
