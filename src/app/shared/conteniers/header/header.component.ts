import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  private searchSubscription$: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  get searchString(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  ngOnInit(): void {
    this.searchSubscription$.add(
      this.searchForm.valueChanges
        .pipe(distinctUntilChanged(), debounceTime(300))
        .subscribe(() => console.log('Search string = ' + this.searchString.value)),
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription$.unsubscribe();
  }
}
