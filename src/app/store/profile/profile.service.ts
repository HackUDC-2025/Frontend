import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setProfileStatus, clearProfileStatus } from './profile.actions';
import { selectProfileStatus } from './profile.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private store: Store) {}

  getProfile(): Observable<string | null> {
    return this.store.select(selectProfileStatus);
  }

  setProfile(status: string): void {
    this.store.dispatch(setProfileStatus({ profileStatus: status }));
  }

  clearProfile(): void {
    this.store.dispatch(clearProfileStatus());
  }
}
