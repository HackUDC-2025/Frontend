import { createAction, props } from '@ngrx/store';
import { ProfileConfig } from 'src/app/profiles/profile.interface';


export const setProfileStatus = createAction(
  '[Profile] Set Profile Status',
  props<{ profileStatus: ProfileConfig }>()
);


export const clearProfileStatus = createAction('[Profile] Clear Profile Status');
