import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from './styles';


const Messages = ({message: {user, text}}) => {
    const classes = styles()
    const name = useSelector(reducer => reducer.datsMethod.username)
    
    let isSend = false;

    const trimName = name.trim().toLowerCase();

    if(user === trimName) {
        isSend = true
    }

    return (
        isSend ? (
            <Grid>
                <div style={{display: 'flex', justifyContent: "flex-end", alignItems: 'center'}}>
                    <div className={classes.message}>
                        <Typography style={{color: "#EBE51E",}} align="right" variant="body2" color="initial" component="p">- {user}</Typography>
                        <p style={{marginTop: '10px', color: "#919191"}}>{text}</p>
                    </div>
                </div>
            </Grid>
        )
        : (
            <Grid>
                <div style={{display: 'flex', justifyContent: "flex-start", alignItems: 'center'}}>
                    <div className={classes.message} style={{backgroundColor: '#d1d1d1'}}>
                        <Typography style={{color: "#757575",}} align="right" variant="body2" color="initial" component="p">- {user}</Typography>
                        <p style={{marginTop: '10px', color: "#474747"}}>{text}</p>
                    </div>
                </div>
            </Grid>
        )
    )
}

export default Messages
