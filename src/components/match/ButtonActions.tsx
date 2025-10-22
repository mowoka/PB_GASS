import { View } from 'react-native';
import { Button } from '../common/Button';
import { IStatus } from '../../stores/useMatch';

export function ButtonActions({
  status,
  onStartMatch,
  onEndMatch,
}: {
  status: IStatus;
  onStartMatch: () => void;
  onEndMatch: () => void;
}) {
  return (
    <View className="w-full px-5 py-5 bg-black">
      {status === 'Mendatang' && (
        <Button
          btnText="Mulai Pertandingan"
          onPress={onStartMatch}
          btnClass="bg-primary-red"
        />
      )}
      {status === 'Berlangsung' && (
        <Button
          btnText="Akhiri Pertandingan"
          onPress={onEndMatch}
          btnClass="bg-primary-red"
        />
      )}
    </View>
  );
}
