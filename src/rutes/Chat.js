import { Grid, LinearProgress, ThemeProvider } from '@material-ui/core'
import React, { useEffect } from 'react'
import ChatContainer from '../components/ChatContainer'
import InputMessage from '../components/InputMessage'
import Sidebar from '../components/Sidebar'
import { styles, theme } from './styles'

import queryString from 'query-string'

import io from 'socket.io-client'

import { chatLogAction, messagesLogAction } from '../redux/actions/chatAction'
import { useDispatch, useSelector } from 'react-redux'


let socket

const Chat = ({location}) => {
    const classes = styles()
    const themes = theme

    const BASE_URL = 'https://academlo-chat.herokuapp.com';

    const dispatch = useDispatch()

    const datsReducers = useSelector(reducers => reducers)

    const token  = datsReducers.datsMethod.token

    const message = datsReducers.chat.message
    const isLoading = datsReducers.chat.isLoading
    // const isLeave = datsReducers.chat.isLeave


    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        if(token) {
           socket = io(BASE_URL, {
                query: {token: token}
            })

            socket.emit('join', {name, room}, () => {

            })
        }

        return () => {
            socket.on('disconnect', () => {})
            socket.off()
        }
    }, [token, location.search])


    useEffect(() => {
        socket.on('message', (message) => {
            dispatch(messagesLogAction(message))
        })

        socket.on('roomData', (data) => {
            dispatch(chatLogAction(data))
        })
    }, [dispatch])

    useEffect(() => {
        if(message) {
            socket.emit('sendMessage', message, () => {})
        }
    }, [message])





    return (
        <div className={classes.backGround}>
            <ThemeProvider theme={themes}>
            {
                isLoading ?
                <LinearProgress color="secondary" variant="indeterminate"/>
                :
                <Grid className={classes.grid}>
                    <Grid item xs={3} lg={2} md={2} sm={3} xl={2}>
                        <Sidebar />  
                    </Grid>
                    <Grid item xs={9} lg={10} md={10} sm={9} xl={10}>
                        <ChatContainer />
                        <InputMessage />
                    </Grid>
                </Grid>
            }
            </ThemeProvider>
        </div>
    )
}

export default Chat
