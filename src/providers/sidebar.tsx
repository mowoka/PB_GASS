import { createContext, useContext, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Close from '../assets/icons/close.png';

export interface ISidebar {
  show: boolean;
  title: string;
  content: React.ReactNode;
}

export interface ISidebarContext {
  isSidebarOpen: boolean;
  handleShow: (item: ISidebar) => void;
  handleClose: () => void;
}

const SidebarContext = createContext<ISidebarContext>({
  isSidebarOpen: false,
  handleShow: () => {},
  handleClose: () => {},
});

const DEFAULT_SIDEBAR: ISidebar = {
  show: false,
  title: '',
  content: <></>,
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebar, setSidebar] = useState<ISidebar>(DEFAULT_SIDEBAR);
  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  const showSidebar = (item: ISidebar) => {
    setSidebar({
      show: item.show,
      title: item.title,
      content: item.content,
    });
  };

  const hideSidebar = () => {
    setSidebar(DEFAULT_SIDEBAR);
  };

  useEffect(() => {
    if (sidebar.show) {
      // Slide in from right to left
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide out to right
      Animated.timing(slideAnim, {
        toValue: SCREEN_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [sidebar.show, slideAnim]);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen: sidebar.show,
        handleShow: showSidebar,
        handleClose: hideSidebar,
      }}
    >
      <Animated.View
        className="absolute top-28 left-0 right-0 z-10 bottom-0 "
        style={{
          transform: [{ translateX: slideAnim }],
        }}
      >
        <View className="flex-1 bg-white p-5 rounded-t-lg">
          <View className="flex-row justify-between items-center">
            <Text className="flex-1 font-ubuntu-bold text-2xl">
              {sidebar.title}
            </Text>
            <TouchableOpacity onPress={hideSidebar}>
              <Image
                source={Close}
                width={35}
                height={35}
                className="w-[30px] h-[30px]"
              />
            </TouchableOpacity>
          </View>
          <View className="mt-5 w-full flex-1">{sidebar.content}</View>
        </View>
      </Animated.View>

      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
