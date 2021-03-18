import React, { useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import {styles, theme}  from './styles'
import { useDispatch } from 'react-redux'
import { loginChatAction } from '../redux/actions/chatAction'

const Login = () => {
    const classes = styles()
    const themes = theme

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    return (
        <div className={classes.backGround}>
            <ThemeProvider theme={themes}>
            <Container className={classes.container}>
                    <Grid className={classes.card}>
                        <Typography variant="h3" align="center" className={classes.title}>Log In</Typography>
                                <Grid>
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        label="Email"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={classes.marginBottom}
                                        fullWidth
                                    />
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        type="password"
                                        label="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        fullWidth
                                    />
                                </Grid>
                                <Link to="/signup" className={classes.marginBottom} align="right" style={{textDecoration: 'none', color: '#FF2700'}}>Create an account</Link>
                                <Grid>
                                   <Link onClick={() => dispatch(loginChatAction(email, password))} to={`/join`} className={classes.link}>
                                        <Button  variant="contained" color="secondary" fullWidth className={classes.button}>
                                                Log In
                                        </Button>
                                   </Link>
                                </Grid>
                        </Grid>
            </Container>
            </ThemeProvider>
       </div>
    )
}

export default Login
