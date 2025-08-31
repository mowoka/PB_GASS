import { ScrollView, StatusBar, View } from 'react-native';

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
    <View className="flex-1 bg-gray-100">
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View className="flex-1 bg-gray-100 relative">{children}</View>
      </ScrollView>
    </View>
  );
}
