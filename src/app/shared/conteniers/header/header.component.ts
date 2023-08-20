import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
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

  @Output() notificationEmit = new EventEmitter<MouseEvent>();

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

  notificationClicked(event: MouseEvent) {
    this.notificationEmit.emit(event);
  }
}
