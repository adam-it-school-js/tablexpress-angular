import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";


const routes: Routes = [
    {
        path: '',
        //component: AuthComponent,
        // canActivate: [AuthGuard],
        children: [
            {path: 'login', component: LoginComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [], // AuthGuard
    exports: [RouterModule]
})

export class AuthRoutingModule {}