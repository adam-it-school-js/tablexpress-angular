import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private searchSubscription$: Subscription = new Subscription();
  public searchForm = this.formBuilder.group({
    search: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchSubscription$.add(
      this.searchForm
        .get('search')
        ?.valueChanges.pipe(distinctUntilChanged(), debounceTime(300))
        .subscribe((search) => console.log('Search string = ' + search)),
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription$.unsubscribe();
  }
}
