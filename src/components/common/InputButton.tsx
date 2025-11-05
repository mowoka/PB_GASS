import { Text, TouchableOpacity, View } from 'react-native';
import { cn } from '../../utils/func';

interface InputButtonProps {
  label?: string;
  value?: string;
  onPress: () => void;
  inputClass?: string;
  placeholder?: string;
}

export function InputButton({
  label,
  value,
  onPress,
  inputClass,
  placeholder = 'Pilih',
}: InputButtonProps) {
  const isValueEmpty = value === undefined || value === '';
  return (
    <View className={cn(`w-full`, inputClass)}>
      {label && (
        <Text className="font-roboto-semi-bold text-sm text-gray-700 mb-2">
          {label}
        </Text>
      )}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className={cn(
          'w-full border rounded-xl p-4 min-h-[52px] flex flex-row justify-between items-center',
          isValueEmpty
            ? 'bg-gray-50 border-gray-200'
            : 'bg-white border-gray-300',
        )}
      >
        <Text
          className={cn(
            'font-roboto-medium text-base flex-1',
            isValueEmpty ? 'text-gray-400' : 'text-gray-800',
          )}
        >
          {isValueEmpty ? placeholder : value}
        </Text>
        <Text className="text-gray-400 ml-2">▼</Text>
      </TouchableOpacity>
    </View>
  );
}
