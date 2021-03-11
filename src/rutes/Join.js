import React, { useState } from 'react'
import { Container, Grid, Typography, TextField, Button, ThemeProvider } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import {styles, theme}  from './styles'
import { Link } from 'react-router-dom';

const Join = () => {
    const classes = styles()
    const themes = theme
    const [isName, setIsName] = useState('')
    const [isRoom, setIsRoom] = useState('')

    return (
       <div className={classes.backGround}>
            <ThemeProvider theme={themes}>
            <Container className={classes.container}>
                    <Grid className={classes.card}>
                        <Typography variant="h3" color="secondary" align="center" className={classes.marginBottom}><ChatIcon fontSize="large"/> Log In</Typography>
                                <Grid>
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        label="Name"
                                        value={isName}
                                        onChange={(e) => setIsName(e.target.value)}
                                        className={classes.marginBottom}
                                        fullWidth
                                    />
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
                                   <Link to={`/chat?name=${isName}&room=${isRoom}`}>
                                        <Button variant="contained" color="secondary" fullWidth className={classes.button}>
                                                Join
                                        </Button>
                                   </Link>
                                </Grid>
                        </Grid>
            </Container>
            </ThemeProvider>
       </div>
    )
}

export default Join
