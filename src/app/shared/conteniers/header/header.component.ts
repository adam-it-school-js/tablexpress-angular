import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  submit() {}
}
