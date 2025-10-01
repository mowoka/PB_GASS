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
      {label && <Text className="font-roboto-bold text-base">{label}</Text>}
      <View className={cn(label && 'mt-2')}>
        {mode === 'default' && (
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
        )}
        {mode === 'bottom-sheet' && (
          <BottomSheetTextInput
            {...inputProps}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            className={cn(
              `w-full border border-primary-gray rounded-md p-3 min-h-[47px]`,
              inputClassName,
            )}
            style={{
              width: '100%',
              borderColor: '#c9cdcf',
              borderWidth: 1,
              borderRadius: 6,
              padding: 12,
              minHeight: 47,
            }}
          />
        )}
      </View>
    </View>
  );
}
