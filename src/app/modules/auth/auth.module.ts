import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";

import { InputTextComponent } from "./../../shared/components/input-text/input-text.component"; // Correct relative path
import { LoginComponent } from "./pages/login/login.component";
import { InputErrorsComponent } from "./../../shared/components/input-errors/input-errors.component"; // Correct relative path

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    InputTextComponent,
    InputErrorsComponent,
  ],
  imports: [ CommonModule, ReactiveFormsModule, AuthRoutingModule ],
})
export class AuthModule {}