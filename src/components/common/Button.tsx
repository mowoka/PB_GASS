import { Text, TouchableOpacity } from 'react-native';
import { cn } from '../../utils/func';

interface ButtonProps {
  btnText: string;
  onPress: () => void;
  isBtnDisable?: boolean;
  btnClass?: string;
  variant?: 'contained' | 'outlined';
}

export function Button({
  onPress,
  btnText,
  isBtnDisable,
  btnClass = '',
  variant = 'contained',
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isBtnDisable}
      className={cn(
        'h-[47px] w-full flex justify-center items-center rounded-lg',
        variant === 'outlined' && 'border border-black',
        variant === 'contained' && 'bg-black',
        btnClass,
        isBtnDisable && 'bg-primary-gray',
      )}
    >
      <Text
        className={cn(
          ' font-roboto-bold text-base',
          variant === 'outlined' && 'text-black',
          variant === 'contained' && 'text-white',
        )}
      >
        {btnText}
      </Text>
    </TouchableOpacity>
  );
}
