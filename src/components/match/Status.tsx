import { Text, View } from 'react-native';
import { cn } from '../../utils/func';
import { IStatus } from '../../stores/useMatch';
import { SHADOW_STYLES } from '../../utils/constants';

export function Status({ status }: { status: IStatus }) {
  const statusConfig: Record<
    IStatus,
    { bg: string; text: string; icon: string }
  > = {
    Mendatang: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: '📅',
    },
    Berlangsung: {
      bg: 'bg-rose-100',
      text: 'text-rose-700',
      icon: '🎮',
    },
    Selesai: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      icon: '✅',
    },
    Terlewat: {
      bg: 'bg-gray-200',
      text: 'text-gray-700',
      icon: '⏰',
    },
    Dibatalkan: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      icon: '❌',
    },
  };

  const config = statusConfig[status];

  return (
    <View
      className={cn(
        `px-3 py-1.5 rounded-full flex-row items-center`,
        config.bg,
      )}
      style={SHADOW_STYLES.small}
    >
      <Text className="text-xs mr-1">{config.icon}</Text>
      <Text className={cn('font-roboto-bold text-xs', config.text)}>
        {status}
      </Text>
    </View>
  );
}
