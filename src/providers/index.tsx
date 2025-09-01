import { BottomModalProvider } from './useBottomModal';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <BottomModalProvider>{children}</BottomModalProvider>;
};
