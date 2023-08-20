import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../../types';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input()
  notification!: Notification;
  iconUrl = '';
  notificationMessage = '';

  ngOnInit(): void {
    this.getDataByStatus(this.notification.status);
  }

  getDataByStatus(status: string) {
    if (!status) {
      return;
    }
    switch (status) {
      case 'deposited':
        this.notificationMessage = 'has been deposited successfully.';
        this.iconUrl = '/assets/images/icon-notification-success.svg';
        break;
      case 'cancelled':
        this.notificationMessage = 'has been cancelled.';
        this.iconUrl = '/assets/images/icon-notification-error.svg';
        break;
      case 'booked':
        this.notificationMessage = 'has been booked. Undeposited.';
        this.iconUrl = '/assets/images/icon-notification-info.svg';
        break;
    }
  }

  closeNotification() {
    console.log('Notification closed');
  }
}
