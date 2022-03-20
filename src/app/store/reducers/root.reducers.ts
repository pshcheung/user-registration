import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@environments/environment';
import { Profile } from "@app/models";

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface RootState {
  router: fromRouter.RouterReducerState<any>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
/*export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
  }),
});*/
export const ROOT_REDUCERS: ActionReducerMap<RootState> = {
  router: fromRouter.routerReducer,
};


// console.log all actions
export function logger(reducer: ActionReducer<RootState>): ActionReducer<RootState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', state);
    console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
    console.log('%c next state', 'color: #4CAF50; font-weight: bold', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? [logger]
  : [];
