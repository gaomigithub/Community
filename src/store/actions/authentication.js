import { SIGN_IN, SIGN_OUT } from '../actionTypes/authenticationTypes';

export const signIn = (event) => ({
    type: SIGN_IN,
    payload: {
        userId: event,
        signedIn: true
    }
});

export const signOut = (event) => ({
    type: SIGN_OUT,
    payload: {
        userId: null,
        signedIn: false
    }
});