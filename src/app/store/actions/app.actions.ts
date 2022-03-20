import { createAction, props } from '@ngrx/store';

import { Profile, User } from "@app/models";

// Housekeeping Actions

/**
 * Loading Actions
 */
export const resetLoading = createAction(
  '[App] Reset Loading'
);
export const setLoading = createAction(
  '[App] Set Loading'
);

/**
 * Alert Actions
 */
export const clearAlert = createAction(
  '[App] Clear Alert'
);
export const setAlert = createAction(
  '[App] Set Alert',
  props<{ message: string, options: any }>()
);

/**
 * Router Actions
 */
export const navigateTo = createAction(
  '[App] Navigate To',
  props<{ path: string }>()
);

// Application specific Actions

export const loadProfile = createAction(
  '[App] Load Profile',
  props<{ id: number }>()
);
export const loadProfileSuccess = createAction(
  '[App] Load Profile Success',
  props<{ profile: Profile }>()
);
export const loadProfileFailure = createAction(
  '[App] Load Profile Failure',
  props<{ error: any }>()
);

export const registerUser = createAction(
  '[App] Register User',
  props<{ user: User }>()
);
export const registerUserSuccess = createAction(
  '[App] Register User Success',
  props<{ user: User }>()
);
export const registerUserFailure = createAction(
  '[App] Register User Failure',
  props<{ error: any }>()
);
