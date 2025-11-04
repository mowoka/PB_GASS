import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { cn } from '../../utils/func';

export interface IDropdown {
  id: string;
  name: string;
}

export interface IDropdownProps {
  label?: string;
  value: IDropdown;
  options?: IDropdown[];
  placeholder?: string;
  onChange: (item: IDropdown) => void;
  inputClass?: string;
}

export function InputDropdown({
  label = '',
  value,
  onChange,
  options = [],
  placeholder = '',
  inputClass,
}: IDropdownProps) {
  return (
    <View className={cn('w-full', inputClass)}>
      {label && <Text className="font-roboto-bold text-base">{label}</Text>}
      <View className={cn('w-full', label && 'mt-2')}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={options}
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder={placeholder}
          renderItem={item => {
            return <Text className="p-3">{item.name}</Text>;
          }}
          value={value}
          onChange={item => {
            onChange(item);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 16,
  },
  dropdown: {
    height: 47,
    borderColor: '#C9CDCF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
});
