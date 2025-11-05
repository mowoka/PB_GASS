import { Text, TextInput, TextInputProps, View } from 'react-native';
import { cn } from '../../utils/func';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  containerClass?: string;
  inputClassName?: string;
  inputProps?: TextInputProps;
  mode?: 'default' | 'bottom-sheet';
}

export function Input({
  label,
  value,
  onChange,
  placeholder = '',
  containerClass = '',
  inputClassName = '',
  inputProps,
  mode = 'default',
}: InputProps) {
  return (
    <View className={cn(containerClass)}>
      {label && (
        <Text className="font-roboto-semi-bold text-sm text-gray-700 mb-2">
          {label}
        </Text>
      )}
      {mode === 'default' && (
        <TextInput
          {...inputProps}
          className={cn(
            `w-full border border-gray-300 rounded-xl p-4 min-h-[52px] bg-white font-roboto-medium text-base text-gray-800`,
            inputClassName,
          )}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          value={value}
          onChangeText={onChange}
        />
      )}
      {mode === 'bottom-sheet' && (
        <BottomSheetTextInput
          {...inputProps}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          className={cn(
            `w-full border border-gray-300 rounded-xl p-4 min-h-[52px] bg-white font-roboto-medium text-base text-gray-800`,
            inputClassName,
          )}
        />
      )}
    </View>
  );
}
