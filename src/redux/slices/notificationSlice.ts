import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { INotification, INotificationState } from 'models/INotification';

const initialState: INotificationState = {
  notification: {
    message: null,
    type: null,
  }
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<INotificationState>) => {
      state.notification = action.payload.notification;
    },
    clearNotification: (state) => {
      state.notification.message = null;
      state.notification.type = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

let timeoutID: number = 0;

export const notify = (
  notification: INotification
): AppThunk => {
  return (dispatch) => {
    window.clearTimeout(timeoutID);
    dispatch(setNotification({ notification: notification }));

    timeoutID = window.setTimeout(() => {
      dispatch(clearNotification());
    }, 6000);
  };
};

export const selectNotifState = (state: RootState) => state.notification;

export default notificationSlice.reducer;
