import { ProfileConfig } from "src/app/profiles/profile.interface";

export interface ProfileState {
    profileStatus: ProfileConfig | null;
  }
  
  export const initialProfileState: ProfileState = {
    profileStatus: null
  };
  