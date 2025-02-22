import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, map, Observable } from 'rxjs';
import { setProfileStatus, clearProfileStatus } from './profile.actions';
import { selectProfileStatus } from './profile.selectors';
import { ProfileConfig } from 'src/app/profiles/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private store: Store) {}

  getProfile(): Observable<ProfileConfig> {
    return this.store.select(selectProfileStatus).pipe(
      map(profile => profile as ProfileConfig) 
    );
  }
  async getProfileString(): Promise<ProfileConfig> {
    return await firstValueFrom(this.getProfile());
  }

  setProfile(status: ProfileConfig): void {
    this.store.dispatch(setProfileStatus({ profileStatus: status }));
  }

  clearProfile(): void {
    this.store.dispatch(clearProfileStatus());
  }
}
