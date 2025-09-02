import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { View } from 'react-native';
import { FieldItem } from '../../components/setting/FieldItem';
import { AddFieldForm } from '../../components/setting/AddFieldForm';
import { useFieldSettingHooks } from '../../hooks/settings/useFieldSetting';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { BottomModal } from '../../components/common/BottomModal';

type MatchFieldScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MatchField'
>;

interface Props {
  navigation: MatchFieldScreenNavigationProp;
}

export default function MatchField({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();

  const {
    fields,
    field,
    isBtnDisable,
    handleOnChange,
    handleSaveField,
    EditField,
    onOpenMaps,
    onDeleteField,
  } = useFieldSettingHooks({
    openBottomModal: openModal,
    onCloseBottomModal: closeModal,
  });

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      height={500}
      modalChildren={
        <AddFieldForm
          field={field}
          isBtnDisable={isBtnDisable}
          onChange={handleOnChange}
          onSave={handleSaveField}
        />
      }
    >
      <Layout
        safeView={false}
        bottomBtnText="Tambah Lapangan"
        showBottomBtn={true}
        onPressBtn={openModal}
      >
        <Header title="Lapangan" onPress={() => navigation.goBack()} />
        <View className="flex-1 p-5">
          {fields.map((item, index) => {
            return (
              <FieldItem
                key={index}
                title={item.name}
                address={item.address}
                onDelete={() => onDeleteField(item)}
                onEdit={() => EditField(item)}
                onMap={() => onOpenMaps(item)}
              />
            );
          })}
        </View>
      </Layout>
    </BottomModal>
  );
}
