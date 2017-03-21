export default class Login {
    static login() {
        localStorage.setItem('loggedIn', true);
    }

    static logout() {
        localStorage.setItem('loggedIn', false);
    }

    static get loggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn'));
    }
}