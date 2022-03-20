import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable, Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { generateUser, Profile, User } from "@app/models";
import { AppActions } from "@app/store/actions";
import * as fromApp from "@app/store/reducers/root.reducers";
import * as fromAppSelector from "@app/store/selectors";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  readonly user: User;
  private readonly _destroying$ = new Subject<void>();
//  private subscriptions$: Subscription[] = [];

  profile$!: Observable<any>;

  constructor(private store: Store<fromApp.RootState>) {
    this.user = generateUser();
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.loadProfile({ id: 0 }));
    this.profile$ = this.store.pipe(select(fromAppSelector.selectProfile)), takeUntil(this._destroying$);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
//    this.subscriptions$.forEach(s => s.unsubscribe());
  }
}
