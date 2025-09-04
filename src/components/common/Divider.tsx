import { View } from 'react-native';
import { cn } from '../../utils/func';

export function Divider({ dividerClass }: { dividerClass?: string }) {
  return (
    <View
      className={cn('w-full border-t-8 border-primary-gray', dividerClass)}
    />
  );
}
