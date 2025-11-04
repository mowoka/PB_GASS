import { SidebarProvider } from './sidebar';
import { SnackbarProvider } from './snakbar';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </SnackbarProvider>
  );
};
