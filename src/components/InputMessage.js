import { Container, TextField } from '@material-ui/core'
import React from 'react'
import { styles } from './styles'

const InputMessage = ({setMessage, message, handleSendMessage}) => {
    const classes = styles()
    // const [messages, setMessages] = useState({})
    // const [input, setInput] = useState("")

    
    return (
        <Container className={classes.inputMessage}>
                <TextField
                label="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={event => event.key === 'Enter' ? handleSendMessage(event) : null}
                />
        </Container>
    )
}

export default InputMessage
