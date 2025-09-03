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
      {label && <Text className="font-roboto-bold text-base">{label}</Text>}
      <View className={cn(label && 'mt-2')}>
        <TouchableOpacity
          onPress={onPress}
          className="w-full border border-primary-gray rounded-md p-3 min-h-[47px]"
        >
          <Text
            className={cn(
              'font-roboto-semi-bold',
              isValueEmpty ? 'text-gray-400' : 'text-black',
            )}
          >
            {isValueEmpty ? placeholder : value}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
