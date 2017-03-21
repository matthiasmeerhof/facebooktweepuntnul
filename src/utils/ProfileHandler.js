export default class ProfileHandler {
    static SetupProfile() {
        let profile = {
            name: ''
        }
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    static SetProfile(profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    static GetProfile() {
        return JSON.parse(localStorage.getItem('profile'));
    }

    static get name() {
        return this.GetProfile().name;
    }

    static set name(name) {
        let profile = this.GetProfile();
        profile.name = name;
        this.SetProfile(profile);
    }
}