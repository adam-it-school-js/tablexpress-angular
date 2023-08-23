import { NgModule } from '@angular/core';
import { SideBarComponent } from './conteniers/side-bar/side-bar.component';
import { InputTextComponent } from 'src/app/shared/components/input-text/input-text.component';
import { InputErrorsComponent } from 'src/app/shared/components/input-errors/input-errors.component';
import { InputCheckboxComponent } from 'src/app/shared/components/input-checkbox/input-checkbox.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

import { HeaderComponent } from './conteniers/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './conteniers/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

// const components = []

// conteiners??? componrnts?
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

const modules = [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule];

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
