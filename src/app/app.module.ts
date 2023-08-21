import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
