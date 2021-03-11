import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import InputMessage from '../components/InputMessage'
import Sidebar from '../components/Sidebar'
import { styles } from './styles'

import queryString from 'query-string'

import io from 'socket.io-client'


let socket

const Chat = ({location}) => {
    const classes = styles()
    const [isName, setIsName] = useState('')
    const [isRoom, setIsRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [roomData, setRoomData] = useState([])

    const BASE_URL = 'https://academlo-chat.herokuapp.com';

     


    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        setIsName(name)
        setIsRoom(room)

        socket = io(BASE_URL)
        
        socket.emit('join', { name, room}, () => {

        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [BASE_URL ,location.search])


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

        socket.on('roomData', (data) => {
            setRoomData(data)
        })
    }, [messages])


    const handleSendMessage = (event) => {
        event.preventDefault()


        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    } 


    return (
        <Container>
            <Grid className={classes.grid}>
                <Grid item xs={2}>
                    <Sidebar roomData={roomData} room={isRoom}/>    
                </Grid>
                <Grid item xs={10}>
                    <ChatContainer messages={messages} name={isName}/>
                    <InputMessage setMessage={setMessage} message={message} handleSendMessage={handleSendMessage} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat
