import { createContext, useContext, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';

export interface IBottomModalContext {
  showBottomModal: (item: React.ReactNode, itemHeight: number) => void;
}

export const BottomModalContext = createContext<IBottomModalContext>({
  showBottomModal: () => {},
});

export const BottomModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modalChildren, setModalChildren] = useState<React.ReactNode>(null);
  const [modalHeight, setModalHeight] = useState<number>(400);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(
    (item: React.ReactNode, itemHeight: number) => {
      setModalHeight(itemHeight);
      setModalChildren(item);
      bottomSheetModalRef.current?.present();
    },
    [],
  );

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomModalContext.Provider
      value={{ showBottomModal: handlePresentModalPress }}
    >
      <GestureHandlerRootView>
        {children}
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            handleStyle={styles.modalContainer}
          >
            <BottomSheetView
              style={{ ...styles.contentContainer, height: modalHeight }}
            >
              {modalChildren}
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </BottomModalContext.Provider>
  );
};

export const useBottomModal = () => useContext(BottomModalContext);

const styles = StyleSheet.create({
  modalContainer: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F6F1E9',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    padding: 20,
  },
});
