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
      {label && (
        <Text className="font-roboto-semi-bold text-sm text-gray-700 mb-2">
          {label}
        </Text>
      )}
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.itemTextStyle}
        data={options}
        maxHeight={300}
        labelField="name"
        valueField="name"
        placeholder={placeholder}
        renderItem={item => {
          return (
            <View className="px-4 py-3 border-b border-gray-100">
              <Text className="font-roboto-medium text-base text-gray-800">
                {item.name}
              </Text>
            </View>
          );
        }}
        value={value}
        onChange={item => {
          onChange(item);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 16,
  },
  dropdown: {
    height: 52,
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#9ca3af',
    fontFamily: 'Roboto-Medium',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#1f2937',
    fontFamily: 'Roboto-Medium',
  },
  containerStyle: {
    borderRadius: 12,
    marginTop: 8,
    overflow: 'hidden',
    borderColor: '#e5e7eb',
    borderWidth: 1,
  },
  itemTextStyle: {
    fontSize: 16,
    color: '#1f2937',
    fontFamily: 'Roboto-Medium',
  },
});
