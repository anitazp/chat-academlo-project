import { DATA_ROOM_CHAT, DATA_MESSAGES_CHAT, SEND_MESSAGE_CHAT, LEAVE_ROOM_CHAT } from '../actions/chatAction'


const INITIAL_STATE = {
    userName: null,
    roomName: null,
    message: null,
    messages: [],
    chatRoom: [], 
    isLoading: true,
}


export const chatReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_ROOM_CHAT:
            return {
                ...state,
                chatRoom: action.payload,
                isLoading: false
            }
        case DATA_MESSAGES_CHAT:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            }
        case SEND_MESSAGE_CHAT:
            return {
                ...state,
                message: action.payload
            }
        case LEAVE_ROOM_CHAT: {
            return {
                ...state,
                message: null,
                chatRoom: [],
                messages: [],
            }
        }
        default:
            return state
    }
}