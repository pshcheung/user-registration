import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppState } from "@app/store/reducers/app.reducers";

export const appFeatureKey = 'app';

export const selectAppState = createFeatureSelector<AppState>(
  appFeatureKey,
);
export const selectLoading = createSelector(
  selectAppState,
  (state: AppState) => (state ? state.loading : false)
);
/*export const selectAlerts = createSelector(
  selectAppState,
  (state: AppState) => (state ? state.alerts : [])
);*/
export const selectProfile = createSelector(
  selectAppState,
  (state: AppState) => (state ? state.profile : {})
);
export const selectPending = createSelector(
  selectAppState,
  (state: AppState) => (state ? state.pending : true)
);
