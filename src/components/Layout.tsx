import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <View className="flex-1 bg-gray-100 px-5 pb-10">{children}</View>;
      </ScrollView>
    </SafeAreaView>
  );
}
