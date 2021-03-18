import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { leaveRoomAction } from '../redux/actions/chatAction'
import { styles } from './styles'

const LeaveRoom = () => {
    const classes = styles()

    const dispatch = useDispatch()

    const userName= useSelector(reducer => reducer.datsMethod.username)
    const userRoom = useSelector(reducer => reducer.chat.chatRoom.users)
    console.log(userName, userRoom)


    
    return (
        <div>
            <Link onClick={() => dispatch(leaveRoomAction(userRoom))} className={classes.leave} to="/join">
                <Button color="secondary" variant="outlined">Leave Room</Button>
            </Link>
        </div>
    )
}

export default LeaveRoom
