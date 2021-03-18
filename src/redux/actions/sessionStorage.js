import { LOGIN_CHAT_SUCCES } from "./chatAction"

export const saveSession = (data) => {
    return dispatch => {
        try{
            const succesState = JSON.stringify(data)
            sessionStorage.setItem('credentials', succesState)
            dispatch({
                type: LOGIN_CHAT_SUCCES,
                payload: data.user
            })
        } 
        catch (err) {

        }
    }
}

export const loadSession = () => {
    return dispatch => {
        try {
            const succesState = sessionStorage.getItem('credentials')
    
            if (succesState === null) {
                return undefined;
            } else {
                const session = JSON.parse(succesState)
                dispatch({
                    type: LOGIN_CHAT_SUCCES,
                    payload: session.user
                })
            }   
        }
        catch (err) {
            return undefined
        }
    }

}
