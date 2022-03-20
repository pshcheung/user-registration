import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

//import { Alert, AlertType } from '@app/core/models';
import { Profile } from "@app/models";
import { AppActions } from "@app/store/actions";
import { registerUserSuccess } from "@app/store/actions/app.actions";

export const appFeatureKey = 'app';

export interface AppState {
  loading: boolean;
//  alerts: Alert[];
  profile?: Profile | undefined;
  pending?: boolean;
}

export const initialState: AppState = {
  loading: false,
//  alerts: []
  pending: true,
};

export const coreReducer = createReducer(
  initialState,
  on(AppActions.resetLoading,
    (state: AppState) =>
      ({
        ...state,
        loading: false
      })),
  on(AppActions.setLoading,
    (state: AppState) =>
      ({
        ...state,
        loading: true
      })),
/*  on(AppActions.clearAlert,
    (state: AppState) =>
      ({
        ...state,
        alerts: []
      })),
  on(AppActions.setAlert,
    (state: AppState, { message, options }) =>
      ({
        ...state,
        alerts: [new Alert({ type: options?.type ? options.type : AlertType.Success, message, autoClose: options.autoClose })]
      })),*/
  on(AppActions.loadProfileSuccess, (state, { profile }) => ({
    ...state,
    profile: profile ? profile : undefined,
    loading: false,
    error: null,
    pending: false,
  })),
  on(AppActions.loadProfileFailure, (state, { error }) => ({
    ...state,
    profile: undefined,
    loading: false,
    error,
    pending: false,
  })),

  on(AppActions.registerUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    error: null,
    pending: false,
  })),
  on(AppActions.registerUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    pending: true,
  })),
);

export function reducer(state: AppState | undefined, action: Action): any {
  return coreReducer(state, action);
}
