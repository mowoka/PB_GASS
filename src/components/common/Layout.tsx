import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export function Layout({
  children,
  safeView = true,
  bottomBtnText = '',
  showBottomBtn = false,
  onPressBtn = () => {},
}: {
  children: React.ReactNode;
  safeView?: boolean;
  showBottomBtn?: boolean;
  bottomBtnText?: string;
  onPressBtn?: () => void;
}) {
  if (safeView) {
    return (
      <LayoutWithSafeView
        bottomBtnText={bottomBtnText}
        showBottomBtn={showBottomBtn}
        onPressBtn={onPressBtn}
      >
        {children}
      </LayoutWithSafeView>
    );
  }
  return (
    <DefaultLayout
      bottomBtnText={bottomBtnText}
      showBottomBtn={showBottomBtn}
      onPressBtn={onPressBtn}
    >
      {children}
    </DefaultLayout>
  );
}

function DefaultLayout({
  children,
  bottomBtnText = '',
  showBottomBtn = false,
  onPressBtn = () => {},
}: {
  children: React.ReactNode;
  showBottomBtn?: boolean;
  bottomBtnText?: string;
  onPressBtn?: () => void;
}) {
  return (
    <View className="flex-1">
      <StatusBar barStyle={'light-content'} />
      <View className="flex-1 bg-white">{children}</View>
      {showBottomBtn && (
        <View className="bg-black px-5 pt-5 pb-8 w-full">
          <TouchableOpacity
            onPress={onPressBtn}
            className="w-full bg-primary-red h-[48px] rounded-lg flex justify-center items-center"
          >
            <Text className="text-white font-bold text-base">
              {bottomBtnText}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function LayoutWithSafeView({
  children,
  showBottomBtn,
  bottomBtnText = '',
  onPressBtn = () => {},
}: {
  children: React.ReactNode;
  showBottomBtn?: boolean;
  bottomBtnText?: string;
  onPressBtn?: () => void;
}) {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle={'light-content'} />
      <View className="flex-1 bg-white relative">{children}</View>
      {showBottomBtn && (
        <View className="bg-black px-5 pt-5 pb-8 w-full">
          <TouchableOpacity
            onPress={onPressBtn}
            className="w-full bg-primary-red h-[48px] rounded-lg flex justify-center items-center"
          >
            <Text className="text-white font-bold text-base">
              {bottomBtnText}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
