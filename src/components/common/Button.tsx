import { Text, TouchableOpacity } from 'react-native';
import { cn } from '../../utils/func';

interface ButtonProps {
  btnText: string;
  onPress: () => void;
  isBtnDisable?: boolean;
  className?: string;
}

export function Button({
  onPress,
  btnText,
  isBtnDisable,
  className = '',
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isBtnDisable}
      className={cn(
        'h-[47px] w-full  flex justify-center items-center rounded-lg',
        isBtnDisable ? 'bg-primary-gray' : 'bg-black',
        className,
      )}
    >
      <Text className="text-white font-roboto-bold text-base">{btnText}</Text>
    </TouchableOpacity>
  );
}
