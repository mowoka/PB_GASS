import { Text, TextInput, TextInputProps, View } from 'react-native';
import { cn } from '../../utils/func';

interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  containerClass?: string;
  inputClassName?: string;
  inputProps?: TextInputProps;
}

export function Input({
  label,
  value,
  onChange,
  placeholder = '',
  containerClass = '',
  inputClassName = '',
  inputProps,
}: InputProps) {
  return (
    <View className={cn(containerClass)}>
      {label && <Text className="font-roboto-bold text-base">{label}</Text>}
      <View className={cn(label && 'mt-2')}>
        <TextInput
          {...inputProps}
          className={cn(
            `w-full border border-primary-gray rounded-md p-3 min-h-[47px]`,
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
