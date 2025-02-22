import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProfileState } from './profile.state';

// Selector para acceder al estado de Profile
export const selectProfileState = createFeatureSelector<ProfileState>('profile');

// Selector específico para obtener el estado del eprofileeo
export const selectProfileStatus = createSelector(
  selectProfileState,
  (state: ProfileState) => state.profileStatus
);
