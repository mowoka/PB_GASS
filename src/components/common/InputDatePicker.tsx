import { Text, TouchableOpacity, View } from 'react-native';

interface InputDatePickerProps {
  label: string;
  value: string;
  onPress: () => void;
}

export function InputDatePicker({
  label,
  value,
  onPress,
}: InputDatePickerProps) {
  return (
    <View>
      <Text className="font-roboto-bold text-base">{label}</Text>
      <View className="mt-2">
        <TouchableOpacity
          onPress={onPress}
          className="w-full border border-gray-400 rounded-md p-3 min-h-[47px]"
        >
          <Text className="font-roboto-semi-bold text-black">{value}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
