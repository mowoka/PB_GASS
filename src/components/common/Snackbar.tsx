import { Text, TouchableOpacity, View } from 'react-native';

export function SnackBarComponent({
  title,
  message,
  showBtn = true,
  showCancelBnt = true,
  onPress = () => {},
  onCancel = () => {},
}: {
  title: string;
  message: string;
  showBtn?: boolean;
  onPress?: () => void;
  onCancel?: () => void;
  showCancelBnt?: boolean;
}) {
  return (
    <View className="absolute z-10 top-0 left-0 right-0 bottom-0 px-5 flex justify-center items-center transition-all transition-discrete ease-in-out duration-300">
      <View className="w-full">
        <View className="w-full h-[200px] bg-white border border-primary-gray p-5 rounded-xl">
          <Text className="text-xl font-bold text-center">{title}</Text>
          <View className="flex-1 mt-2">
            <Text className="text-center">{message}</Text>
          </View>
          {showBtn && (
            <View className="w-full h-10 flex flex-row justify-between items-center">
              <TouchableOpacity
                onPress={onPress}
                className="flex-1 mr-1 flex justify-center items-center h-[50px] bg-black rounded-lg"
              >
                <Text className="font-semibold text-white">OK</Text>
              </TouchableOpacity>
              {showCancelBnt && (
                <TouchableOpacity
                  onPress={onCancel}
                  className="flex-1 ml-1 flex justify-center items-center h-[50px] border border-black rounded-lg"
                >
                  <Text className="font-semibold text-black">BATAL</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
