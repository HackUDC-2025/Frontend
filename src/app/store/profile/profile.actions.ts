import { createAction, props } from '@ngrx/store';


export const setProfileStatus = createAction(
  '[Profile] Set Profile Status',
  props<{ profileStatus: string }>()
);


export const clearProfileStatus = createAction('[Profile] Clear Profile Status');
