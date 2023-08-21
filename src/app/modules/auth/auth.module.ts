import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
