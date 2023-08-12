import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//import { InputTextComponent } from "./shared/components/input-text/input-text.component";



@NgModule({
  declarations: [AppComponent, ], //InputTextComponent
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
