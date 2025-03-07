export const LOCALSTORAGE_CONSTANTS = {
    AUTH_TOKEN: "authToken",
    USER_EMAIL: "userEmail",
    // Add other paths here
};
  export const isLoggedIn = () => {
    return localStorage.getItem(LOCALSTORAGE_CONSTANTS.AUTH_TOKEN) != null
  }