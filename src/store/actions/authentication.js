import { SIGN_IN, SIGN_OUT } from '../actionTypes/authenticationTypes';

export const signIn = (event) => ({
    type: SIGN_IN,
    payload: {
        user: event,
        signedIn: true
    }
});

export const signOut = () => ({
    type: SIGN_OUT,
    payload: {
        user: null,
        signedIn: false
    }
});