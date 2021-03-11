export const types = {
    SEND_MESSAGE: "SEND_MESSAGE",
    CHAT_LOG_UPDATE: "CHAT_LOG_UPDATE",
    CREATE_ROOM_REQUEST: "CREATE_ROOM_REQUEST",
    CREATE_ROOM_SUCCESS: "CREATE_ROOM_SUCCESS",
    CREATE_ROOM_ERROR: "CREATE_ROOM_ERROR",
}


export const createRoomRequest = () => {
    return {
        type: types.CREATE_ROOM_REQUEST
    }
}

export const createRoomSuccess = (payload) => {
    return {
        type: types.CREATE_ROOM_SUCCESS
    }
}