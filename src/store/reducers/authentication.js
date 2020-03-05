import { SIGN_IN, SIGN_OUT } from '../actionTypes/authenticationTypes';
const initialState = {
    userId: null,
    signedIn: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SIGN_IN:
            break;
        case SIGN_OUT:
        default:
            return state;
    }
}