import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    // it did`nt works
    path: "",
    children: [{ path: "login", component: LoginComponent }],
  },
  {
    // it works
    path: "aut/login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
