import React, { useState } from 'react'
import { Container, Grid, Typography, TextField, Button, ThemeProvider, LinearProgress } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import {styles, theme}  from './styles'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../redux/actions/chatAction';


const Join = () => {
    const classes = styles()
    const themes = theme
    const history = useHistory()
    const dispatch = useDispatch()

    const [isRoom, setIsRoom] = useState('')

    const reducer = useSelector(reducer => reducer)

    const userName = reducer.datsMethod.username
    const isLoading = reducer.datsMethod.isLoading

    const handleLogOut = () => {
        sessionStorage.removeItem('credentials')
        dispatch(logOutAction())
        history.push('/login')
    }



    return (
       <>
           <div className={classes.backGround}>
                <ThemeProvider theme={themes}>
                    {
                        isLoading ?
                            <LinearProgress color="secondary" variant="indeterminate"/>
                        :
                            <Container className={classes.container}>
                                    <Button onClick={() => handleLogOut()} className={classes.fixed} color="secondary" variant="outlined">Log Out</Button>
                                    <Grid className={classes.card}>
                                        <Typography variant="h3" color="secondary" align="center" className={classes.marginBottom}><ChatIcon fontSize="large"/> Join Room</Typography>
                                                <Grid>
                                                    <Typography variant="h5" color="initial" className={classes.users}>Hi {userName}, Enter a Room!</Typography>
                                                    <TextField
                                                        variant="outlined"
                                                        label="Room"
                                                        value={isRoom}
                                                        onChange={(e) => setIsRoom(e.target.value)}
                                                        className={classes.marginBottom}
                                                        color="secondary"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid>
                                                <Link to={`/chat?name=${userName}&room=${isRoom}`} className={classes.link}>
                                                        <Button variant="contained" color="secondary" fullWidth className={classes.button}>
                                                                Join
                                                        </Button>
                                                </Link>
                                                </Grid>
                                        </Grid>
                            </Container>
                    }
                </ThemeProvider>
            </div>
       </>
    )
}

export default Join
