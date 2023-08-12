import { Component, NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./pages/login/login.component";
import { InputTextComponent } from "src/app/shared/components/input-text/input-text.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
    declarations: [AuthComponent, LoginComponent, InputTextComponent],
    // imports: [RouterModule.forChild(routes)],
    imports: [ReactiveFormsModule, AuthRoutingModule]
})

export class AuthModule {}