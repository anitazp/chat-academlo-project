import { LOGIN_CHAT_SUCCES, SIGNUP_CHAT_SUCCES } from '../actions/chatAction'

const INITAL_STATE = {
    username: null,
    id: null,
    token: null,
    isLoading: true
}



export const loginAndSignup = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_CHAT_SUCCES:
            return {
                ...state,
                username: action.payload.username,
                id: action.payload.id,
                token: action.payload.token,
                isLoading: false
            }
        case SIGNUP_CHAT_SUCCES:
            return {
                ...state,
                username: action.payload.username,
                id: action.payload.id,
                token: action.payload.token,
                isLoading: false
            }

        default:
            return state
    }
}