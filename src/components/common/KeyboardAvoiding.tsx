import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';

interface KeyboardAvoidingProviderProps {
  children: React.ReactNode;
  isBottomSheet?: boolean;
  extraOffset?: number;
}

export function KeyboardAvoidingProvider({
  children,
  isBottomSheet = false,
  extraOffset = 0,
}: KeyboardAvoidingProviderProps) {
  // Use 'padding' for both platforms when dealing with bottom sheets
  // This provides more predictable behavior
  const behavior = isBottomSheet
    ? 'padding'
    : Platform.OS === 'ios'
    ? 'padding'
    : 'height';

  // Calculate offset based on context
  const keyboardVerticalOffset = isBottomSheet
    ? Platform.OS === 'ios'
      ? extraOffset // Allow custom offset for fine-tuning
      : extraOffset
    : Platform.OS === 'ios'
    ? 0
    : 0;

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={[styles.container, isBottomSheet && styles.bottomSheetContainer]}
      enabled={true}
    >
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetContainer: {
    justifyContent: 'flex-end',
  },
});
