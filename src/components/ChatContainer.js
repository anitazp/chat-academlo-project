import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Messages from './Messages'
import { styles } from './styles'

const ChatContainer = ({messages, name}) => {
    const classes = styles()
    return (
        <Container className={classes.chatContainer}>
            <Grid>
                {
                    messages.map((text) => (
                        <Typography variant="subtitle2" color="initial"><Messages message={text} name={name}/></Typography>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default ChatContainer
