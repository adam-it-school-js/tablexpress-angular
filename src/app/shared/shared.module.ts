import { NgModule } from '@angular/core';
import { SideBarComponent } from './conteniers/side-bar/side-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './conteniers/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './conteniers/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminModule } from '../moduls/admin/admin.module';

// const components = []

const contenders = [LayoutComponent, SideBarComponent, HeaderComponent];

// const pipes = []

//const directives = [];

const modules = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  AdminModule,
];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class SharedModule {}

// @NgModule({
//     declarations: [components, pipes, directives],
//     imports: [modules],
//     exports: [modules, components, modals, pipes, directives],
//   })
