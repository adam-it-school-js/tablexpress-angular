import { Component, NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";

import { InputTextComponent } from "src/app/shared/components/input-text/input-text.component";

import { LoginComponent } from "./pages/login/login.component";
import { InputErrorsComponent } from "src/app/shared/components/input-errors/input-errors.component";

@NgModule({
  declarations: [AuthComponent, LoginComponent, InputTextComponent, InputErrorsComponent],
  imports: [ReactiveFormsModule, AuthRoutingModule],
})
export class AuthModule {}
