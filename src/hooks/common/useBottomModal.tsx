import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useRef } from 'react';

export function useBottomModalHooks() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const closeModal = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  return {
    bottomSheetModalRef,
    openModal,
    closeModal,
  };
}
