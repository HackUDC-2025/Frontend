import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, map, Observable } from 'rxjs';
import { setProfileStatus, clearProfileStatus } from './profile.actions';
import { selectProfileStatus } from './profile.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private store: Store) {}

  getProfile(): Observable<string> {
    return this.store.select(selectProfileStatus).pipe(
      map(profile => profile ?? "default") 
    );
  }
  async getProfileString(): Promise<string> {
    return await firstValueFrom(this.getProfile());
  }

  setProfile(status: string): void {
    this.store.dispatch(setProfileStatus({ profileStatus: status }));
  }

  clearProfile(): void {
    this.store.dispatch(clearProfileStatus());
  }
}
