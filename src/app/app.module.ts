import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
