export interface INotification {
  message: string | null;
  type: 'success' | 'error' | null;     
}

export interface INotificationState {
  notification: INotification
}
