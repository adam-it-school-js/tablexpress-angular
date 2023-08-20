export enum NotificationStatus {
  DEPOSITED = 'deposited',
  CANCELLED = 'cancelled',
  BOOKED = 'booked',
}

export interface Notification {
  id: number;
  status: NotificationStatus;
  time: string;
}
