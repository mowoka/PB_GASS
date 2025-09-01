import { Text, TextInput, TextInputProps, View } from 'react-native';
import { cn } from '../../utils/func';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  inputProps?: TextInputProps;
}

export function Input({
  label,
  value,
  onChange,
  placeholder = '',
  className = '',
  inputClassName = '',
  inputProps,
}: InputProps) {
  return (
    <View className={cn(`mb-5`, className)}>
      <Text className="font-roboto-bold text-base">{label}</Text>
      <View className="mt-2">
        <TextInput
          {...inputProps}
          className={cn(
            `w-full border border-gray-400 rounded-md p-3 min-h-[47px]`,
            inputClassName,
          )}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}
