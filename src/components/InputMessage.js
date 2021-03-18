import { Container, TextField, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessageAction } from '../redux/actions/chatAction'
import { styles, theme } from './styles'

const InputMessage = () => {
    const classes = styles()
    const themes = theme
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const handleSendMessage = () => {
        dispatch(sendMessageAction(message))
        setMessage('')
    }


    
    return (
        <Container className={classes.inputMessage}>
            <ThemeProvider theme={themes}>
                <TextField
                    label="message"
                    color="secondary"
                    variant="outlined"
                    multiline
                    rows={1}
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={value => value.key === "Enter" ? handleSendMessage() : null}
                />
            </ThemeProvider>
        </Container>
    )
}

export default InputMessage
