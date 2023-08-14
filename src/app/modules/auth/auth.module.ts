import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./pages/login/login.component";
import { InputTextComponent } from "src/app/shared/components/input-text/input-text.component";
import { InputErrorsComponent } from "src/app/shared/components/input-errors/input-errors.component";
import { InputCheckboxComponent } from "src/app/shared/components/input-checkbox/input-checkbox.component";
import { ButtonComponent } from "src/app/shared/components/button/button.component";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    InputTextComponent,
    InputCheckboxComponent,
    InputErrorsComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
})
export class AuthModule {}
