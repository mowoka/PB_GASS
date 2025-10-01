import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function BottomModal({
  children,
  modalChildren,
  ref,
  height = 400,
}: {
  children: React.ReactNode;
  modalChildren: React.ReactNode;
  ref: React.Ref<BottomSheetModal>;
  height?: number;
}) {
  const handleSheetChanges = useCallback(() => {}, []);

  const snapPoints = useMemo(() => ['25%'], []);

  return (
    <GestureHandlerRootView>
      {children}
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          onChange={handleSheetChanges}
          handleStyle={styles.modalContainer}
          snapPoints={snapPoints}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
        >
          <BottomSheetView
            style={{
              ...styles.contentContainer,
              height: height,
            }}
          >
            {modalChildren}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F6F1E9',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'relative',
    zIndex: 999,
  },
  contentContainer: {
    padding: 20,
  },
});
