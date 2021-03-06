import { SIGN_IN, SIGN_OUT } from '../actionTypes/authenticationTypes';

const initialState = {
    user: null,
    signedIn: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SIGN_IN:
            return {
                user: action.payload.user,
                signedIn: true
            }
        case SIGN_OUT:
            return {
                user: null,
                signedIn: false
            }
        default:
            return state;
    }
}