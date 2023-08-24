import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SideBarComponent } from './conteniers/side-bar/side-bar.component';
import { InputTextComponent } from 'src/app/shared/components/input-text/input-text.component';
import { InputErrorsComponent } from 'src/app/shared/components/input-errors/input-errors.component';
import { InputCheckboxComponent } from 'src/app/shared/components/input-checkbox/input-checkbox.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

import { HeaderComponent } from './conteniers/header/header.component';
import { LayoutComponent } from './conteniers/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';


// const components = []

// conteiners??? components?
const contenders = [
  InputTextComponent,
  InputCheckboxComponent,
  InputErrorsComponent,
  ButtonComponent,

  LayoutComponent,
  SideBarComponent,
  HeaderComponent,
];

// const pipes = []

//const directives = [];

const modules = [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatIconModule, ];

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
