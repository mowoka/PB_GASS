import { Text, TextInput, View } from 'react-native';
import { cn } from '../../utils/func';

interface InputProps {
  label: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

export function Input({
  label,
  placeholder = '',
  className = '',
  inputClassName = '',
}: InputProps) {
  return (
    <View className={cn(`mb-5`, className)}>
      <Text className="font-roboto-bold text-base">{label}</Text>
      <View className="mt-2">
        <TextInput
          className={cn(
            `w-full border border-gray-400 rounded-md h-[47px] p-3`,
            inputClassName,
          )}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}
