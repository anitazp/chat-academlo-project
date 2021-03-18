import axios from 'axios'


export const JOIN_ROOM_SUCCES = "JOIN_ROOM_SUCCES"


export const SIGNUP_CHAT_SUCCES = "SIGNUP_CHAT_SUCCES"
export const SIGNUP_CHAT_ERROR = "SIGNUP_CHAT_ERROR"

export const LOGIN_CHAT_SUCCES = "LOGIN_CHAT_SUCCES"
export const LOGIN_CHAT_ERROR = "LOGIN_CHAT_ERROR"

export const DATA_ROOM_CHAT = "DATA_ROOM_CHAT"
export const DATA_MESSAGES_CHAT = "DATA_MESSAGES_CHAT"

export const SEND_MESSAGE_CHAT = "SEND_MESSAGE_CHAT"

export const LEAVE_ROOM_CHAT = "LEAVE_ROOM_CHAT"



export const chatLogAction = (data) => {
    return {
        type: DATA_ROOM_CHAT,
        payload: data
    }
}

export const messagesLogAction = (data) => {
    return {
        type: DATA_MESSAGES_CHAT,
        payload: data
    }
}

export const leaveRoomAction = () => {
    return {
        type: LEAVE_ROOM_CHAT,
    }
} 

export const sendMessageAction = (message) => {
    return {
        type: SEND_MESSAGE_CHAT,
        payload: message
    }
}


export const loginChatAction = (email, password) => {
    return (dispatch) => {
        const res = axios.post('https://academlo-chat.herokuapp.com/api/users/login', {
            email,
            password
        })
        res.then(({data}) => {
            dispatch({
                type: LOGIN_CHAT_SUCCES,
                payload: data.user
            })
        })
        .catch((err) => {
            console.log(err)
        }) 
    }
}



export const signupChatLogin = (email, username, password) => {
    return (dispatch) => {
        const res = axios.post('https://academlo-chat.herokuapp.com/api/users/signup', {
            username: username,
            email: email,
            password: password
        })
        res.then(({data}) => {
            dispatch({
                type: SIGNUP_CHAT_SUCCES,
                payload: data.user
            })
        })
        .catch((err) => {
            console.log(err)
        }) 
    }

            

                
}