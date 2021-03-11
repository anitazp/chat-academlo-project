import React from 'react'
import Typography from '@material-ui/core/Typography'

const Messages = ({message: {user, text}, name}) => {

    let isSend = false;


    const trimmedName = name.trim().toLowerCase();


    if(user === trimmedName) {
        isSend = true
    }


    return (
        isSend ? (
            <div>
                <Typography variant="subtitle1" color="initial" align="right">{user}</Typography>
                <Typography variant="subtitle1" color="initial" align="right">{text}</Typography>
            </div>
        )
        : (
            <div>
                <Typography variant="subtitle1" color="initial" align="left">{user}</Typography>
                <Typography variant="subtitle1" color="initial" align="left">{text}</Typography>
            </div>
        )
    )
}

export default Messages
