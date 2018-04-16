class authToken {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static set(token) {
      localStorage.setItem('token', token);
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isSet() {
      return localStorage.getItem('token') !== null;
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static unset() {
      localStorage.removeItem('token');
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getToken() {
      return localStorage.getItem('token');
    }
  
  }
  
  export default authToken;