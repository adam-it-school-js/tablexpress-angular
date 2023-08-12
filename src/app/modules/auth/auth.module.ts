import { Component, NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./pages/login/login.component";


@NgModule({
    declarations: [AuthComponent, LoginComponent],
    // imports: [RouterModule.forChild(routes)],
    imports: [AuthRoutingModule]
})

export class AuthModule {}