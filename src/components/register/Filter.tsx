import { Image, Text, TouchableOpacity, View } from 'react-native';
import { InputButton } from '../common/InputButton';

import CloseIcon from '../../assets/icons/close.png';

interface IFilterProps {
  filterValue: string;
  openDatePicker: () => void;
  onFilter: () => void;
  onResetFilter: () => void;
}

export function Filter({
  openDatePicker,
  onFilter,
  filterValue,
  onResetFilter,
}: IFilterProps) {
  const isFilterValueEmpty = filterValue === '';
  return (
    <View className="px-5 pt-5 flex flex-row justify-start items-center">
      <View className="flex-1 relative">
        <InputButton
          inputClass="flex-1"
          onPress={openDatePicker}
          placeholder="Cari Pertandingan"
          value={filterValue}
        />
        {!isFilterValueEmpty && (
          <TouchableOpacity
            onPress={onResetFilter}
            className="absolute right-0 top-0 h-[47px] w-[47px] rounded-lg fle justify-center items-center"
          >
            <Image
              source={CloseIcon}
              width={48}
              height={48}
              className="w-[25px] h-[25px]"
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={onFilter}
        className="w-28 h-[47px] ml-2 bg-black flex justify-center items-center rounded-lg"
      >
        <Text className="text-white uppercase font-roboto-bold">Filter</Text>
      </TouchableOpacity>
    </View>
  );
}
