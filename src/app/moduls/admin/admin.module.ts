import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SocAdvistoriesComponent } from './conteniers/soc-advistories/soc-advistories.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { NotificationComponent } from './conteniers/notification/notification.component';

const contenders = [SocAdvistoriesComponent];
const modules = [BrowserModule, AppRoutingModule, CommonModule];

@NgModule({
  declarations: [contenders, NotificationComponent],
  imports: [modules, NgOptimizedImage],
  exports: [modules, contenders],
})
export class AdminModule {}
