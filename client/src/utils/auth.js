//collects all fuctions regarding JWTs and authentication

//used save user JWTs to local storage and perform conditional rendering on React components that require the user to be logged in

import decode from 'jwt-decode';

class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }

    //check if user is still logged in
    loggedIn() {
        //checks if there is a saved token and it's still valid
        const token = this.getToken();
        //use type coersion to check if token is NOT undefined and the token is NOT expired
        return !!token && !this.isTokenExpired(token);
    }

    //check if token has expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    //retrieve token from localStorage
    getToken(){
        //retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    //set token to localStorage and reload to homepage
    login(idToken) {
        //saves user token to localStorage
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    //clear token from localStorage and force logout with reload
    logout() {
        //clear user token and profile data from localStorage
        localStorage.removeItem('id_token');

        //reload page and reset application
        window.location.assign('/');
    }

}

export default new AuthService();