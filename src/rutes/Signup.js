import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signupChatLogin } from '../redux/actions/chatAction'
import {styles, theme}  from './styles'

const Signup = () => {
    const classes = styles()
    const themes = theme

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    
    
    return (
        <div className={classes.backGround}>
            <ThemeProvider theme={themes}>
            <Container className={classes.container}>
                    <Grid className={classes.card}>
                        <Typography variant="h3" color="secondary" align="center" className={classes.marginBottom}>Sig Nup</Typography>
                                <Grid>
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        label="UserName"
                                        className={classes.marginBottom}
                                        onChange={(e) => setUsername(e.target.value)}
                                        fullWidth
                                    />
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        type="email"
                                        label="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={classes.marginBottom}
                                        fullWidth
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="password"
                                        label="Password"
                                        className={classes.marginBottom}
                                        color="secondary"
                                        onChange={(e) => setPassword(e.target.value)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid>
                                   <Link to="/join" onClick={() => dispatch(signupChatLogin(email, username, password))} className={classes.link}>
                                        <Button variant="contained" color="secondary" fullWidth className={classes.button}>
                                                Sig Nup
                                        </Button>
                                   </Link>
                                </Grid>
                        </Grid>
            </Container>
            </ThemeProvider>
       </div>
    )
}

export default Signup
