import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './conteniers/side-bar/side-bar.component';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule],
  exports: [SideBarComponent],
})
export class SharedModule {}
