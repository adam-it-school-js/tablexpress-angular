import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './conteniers/side-bar/side-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './conteniers/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// const components = []

const contenders = [SideBarComponent, HeaderComponent];

// const pipes = []

//const directives = [];

const modules = [CommonModule, BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule];

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
