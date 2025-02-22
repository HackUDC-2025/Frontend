import { createReducer, on } from '@ngrx/store';
import { setProfileStatus, clearProfileStatus } from './profile.actions';
import { ProfileState, initialProfileState } from './profile.state';

export const profileReducer = createReducer(
  initialProfileState,
  on(setProfileStatus, (state, { profileStatus }) => ({ ...state, profileStatus })),
  on(clearProfileStatus, state => ({ ...state, profileStatus: null }))
);
