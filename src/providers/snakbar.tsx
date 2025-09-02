import { createContext, useContext, useEffect, useState } from 'react';
import { SnackBarComponent } from '../components/common/Snackbar';

export interface ISnackbar {
  show: boolean;
  title?: string;
  message: string;
  autohide?: boolean;
  showCancelBtn?: boolean;
  onPress: () => void;
  onCancel?: () => void;
}

export interface ISnackbarContext {
  handleShow: (item: ISnackbar) => void;
  handleClose: () => void;
}

const SnackBarContext = createContext<ISnackbarContext>({
  handleShow: () => {},
  handleClose: () => {},
});

const DEFAULT_SNACKBAR: ISnackbar = {
  show: false,
  message: '',
  title: 'Alert',
  autohide: true,
  showCancelBtn: true,
  onPress: () => {},
  onCancel: () => {},
};

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackbar, setSnackbar] = useState<ISnackbar>(DEFAULT_SNACKBAR);

  const showSnackbar = (item: ISnackbar) => {
    setSnackbar({
      show: item.show,
      message: item.message,
      title: item.title,
      autohide: item.autohide ?? true,
      showCancelBtn: item.showCancelBtn ?? true,
      onCancel: () => {
        setSnackbar(DEFAULT_SNACKBAR);
      },
      onPress: item.onPress,
    });
  };

  const hideSnackbar = () => {
    setSnackbar(DEFAULT_SNACKBAR);
  };

  useEffect(() => {
    if (!snackbar.show || !snackbar.autohide) {
      return;
    }
    const timeout = setTimeout(() => {
      setSnackbar(DEFAULT_SNACKBAR);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [snackbar]);

  return (
    <SnackBarContext.Provider
      value={{
        handleShow: showSnackbar,
        handleClose: hideSnackbar,
      }}
    >
      {snackbar.show && (
        <SnackBarComponent
          title={snackbar.title ?? 'Alert'}
          message={snackbar.message}
          onPress={snackbar.onPress}
          onCancel={snackbar.onCancel}
          showCancelBnt={snackbar.showCancelBtn}
        />
      )}
      {children}
    </SnackBarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackBarContext);
