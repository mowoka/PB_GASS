import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { ScrollView, View } from 'react-native';
import { LevelItem } from '../../components/setting/LevelItem';
import { usePlayerLevelHooks } from '../../hooks/settings/usePlayerLevel';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { BottomModal } from '../../components/common/BottomModal';
import { AddPlayerLevelForm } from '../../components/setting/AddPlayerLevelForm';

type PlayerLevelScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PlayerLevel'
>;

interface Props {
  navigation: PlayerLevelScreenNavigationProp;
}

export default function PlayerLevel({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();
  const {
    playerLevels,
    playerLevel,
    isBtnSaveDisable,
    handleOnChange,
    handleDeletePlayerLevel,
    handleSavePlayerLevel,
  } = usePlayerLevelHooks({
    onCloseBottomModal: closeModal,
  });

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      height={200}
      modalChildren={
        <AddPlayerLevelForm
          playerLevel={playerLevel}
          onChange={handleOnChange}
          onSave={handleSavePlayerLevel}
          isBtnDisable={isBtnSaveDisable}
        />
      }
    >
      <Layout
        safeView={false}
        bottomBtnText="Tambah Level Pemain"
        showBottomBtn={true}
        onPressBtn={openModal}
      >
        <Header title="Level Pemain" onPress={() => navigation.goBack()} />
        <ScrollView>
          <View className="flex-1 p-5">
            {playerLevels.map((item, index) => {
              return (
                <LevelItem
                  key={index}
                  name={item.name}
                  onDelete={() => handleDeletePlayerLevel(item)}
                />
              );
            })}
          </View>
        </ScrollView>
      </Layout>
    </BottomModal>
  );
}
