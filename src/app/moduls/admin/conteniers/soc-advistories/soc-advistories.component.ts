import { Component } from '@angular/core';
import { notifications } from './dummy-mocks';

@Component({
  selector: 'app-soc-advistories',
  templateUrl: './soc-advistories.component.html',
  styleUrls: ['./soc-advistories.component.scss'],
})
export class SocAdvistoriesComponent {
  date: string;
  readonly notifications = notifications;

  constructor() {
    this.date = new Date().getHours().toString() + ':' + new Date().getMinutes().toString();
  }
}
