
    const APP_PREFIX ="new-login-";

    export function setToLocalStr(userObj) {
    if(userObj) {
        localStorage.setItem(APP_PREFIX + 'user',JSON.stringify(userObj));
        }
    }

    export function removeFromLclStorage(user='user'){
        localStorage.removeItem(APP_PREFIX + user);
    }

    export function getFromLclStorage(user='user'){
       return JSON.parse(localStorage.getItem(APP_PREFIX + user));
    }



