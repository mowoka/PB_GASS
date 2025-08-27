import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Layout({
  children,
  safeView = true,
}: {
  children: React.ReactNode;
  safeView?: boolean;
}) {
  if (safeView) {
    return <LayoutWithSafeView>{children}</LayoutWithSafeView>;
  }
  return <DefaultLayout>{children}</DefaultLayout>;
}

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <StatusBar barStyle={'dark-content'} />
      {children}
    </View>
  );
}

function LayoutWithSafeView({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <View className="flex-1 bg-gray-100 px-5 pb-10">{children}</View>;
      </ScrollView>
    </SafeAreaView>
  );
}
