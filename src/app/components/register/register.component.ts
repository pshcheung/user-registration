import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable, Subject, Subscription } from "rxjs";

import { generateUser, User } from "@app/models";
import * as fromApp from "@app/store/reducers/root.reducers";
import { AppActions } from "@app/store/actions";
import * as fromAppSelector from "@app/store/selectors";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  private readonly _destroying$ = new Subject<void>();
  processStatus$: Observable<any>|null = null;
  submitted: boolean = false;

  constructor(private store: Store<fromApp.RootState>) {
    this.user = generateUser();
  }

  ngOnInit(): void {
    this.processStatus$ = this.store.pipe(select(fromAppSelector.selectPending)), takeUntil(this._destroying$);
  }

  onSubmit() {
    // reset alerts on submit
    this.store.dispatch(AppActions.clearAlert());

    this.submitted = true;
    this.submitRegistration(this.user);
  }

  private submitRegistration(user: User) {
    this.store.dispatch(AppActions.registerUser({user}));
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
