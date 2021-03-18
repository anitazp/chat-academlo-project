import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { leaveRoomAction } from '../redux/actions/chatAction'
import { styles } from './styles'

const LeaveRoom = () => {
    const classes = styles()

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLeave = () => {
        dispatch(leaveRoomAction())
        history.push('/login')
        window.location.reload()
    }
    
    return (
        <div>
            <Link onClick={() => handleLeave()} className={classes.leave} to="/join">
                <Button color="secondary" variant="outlined">Leave Room</Button>
            </Link>
        </div>
    )
}

export default LeaveRoom
