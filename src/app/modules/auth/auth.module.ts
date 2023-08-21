import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

import { LoginComponent } from "src/app/modules/auth/pages/login/login.component";
import { AuthComponent } from "./auth.component";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [SharedModule],
})
export class AuthModule {}
