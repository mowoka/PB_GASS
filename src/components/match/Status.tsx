import { Text, View } from 'react-native';
import { cn } from '../../utils/func';
import { IStatus } from '../../stores/useMatch';

export function Status({ status }: { status: IStatus }) {
  const statusColors: Record<IStatus, string> = {
    Mendatang: 'bg-blue-600',
    Berlangsung: 'bg-yellow-600',
    Selesai: 'bg-green-600',
    Terlewat: 'bg-gray-600',
    Dibatalkan: 'bg-red-600',
  };

  return (
    <View className={cn(`px-3 py-1 rounded-full`, statusColors[status])}>
      <Text className="text-white font-roboto-bold text-xs">{status}</Text>
    </View>
  );
}
