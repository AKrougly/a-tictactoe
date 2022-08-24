import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

import { useAppSelector, useAppDispatch } from 'redux/hooks';
import {
  clearNotification,
  selectNotifState,
} from 'redux/slices/notificationSlice';

const ToastNotification: React.FC = (): React.ReactElement | null => {
  const dispatch = useAppDispatch();
  const { notification } = useAppSelector(selectNotifState);

  const clearNotif = () => {
    dispatch(clearNotification());
  };

  if (!notification.message || !notification.type) return null;

  return (
    <Snackbar
      open={!!notification.message}
      onClose={clearNotif}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={clearNotif} severity={notification.type}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;
