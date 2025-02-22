import { childProfile } from "./child.profile";
import { fineartsProfile } from "./finearts.profile";
import { ProfileConfig } from "./profile.interface";
import { researcherProfile } from "./researcher.profile";
import { touristProfile } from "./tourist.profile";


export class ProfileFactory{
    private static profiles: { [key: string]: ProfileConfig } = {
        'child': childProfile,
        'finearts': fineartsProfile,
        'researcher': researcherProfile,
        'tourist': touristProfile
    };

    static getProfile(profileName: string): ProfileConfig {
        return this.profiles[profileName];
    }

    static getProfiles(): string[] {
        return Object.keys(this.profiles);
    }
    
}