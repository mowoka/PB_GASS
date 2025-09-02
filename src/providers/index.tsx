import { SnackbarProvider } from './snakbar';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};
