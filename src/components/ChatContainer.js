import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from './styles'
import Messages from './Messages'
import LeaveRoom from './LeaveRoom'

const ChatContainer = () => {
    const classes = styles()

    const allMessages = useSelector(reducer => reducer.chat.messages)

    return (
        <Container className={classes.chatContainer}>
            <LeaveRoom />
            <Grid>
                {
                    allMessages.map((item, index) => (
                        <Typography variant="subtitle2" color="initial" key={index}><Messages message={item}/></Typography>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default ChatContainer
