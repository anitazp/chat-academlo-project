import { Grid } from '@material-ui/core';
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
    // <div className={classes.getText}>
    //                     <Typography variant="subtitle1" color="initial" >{text} <span>{user}</span> </Typography>
    //                 </div>
    // style={{display: "inline-block", backgroundColor: "grey", padding: '10px'}}

    return (
        isSend ? (
            <Grid>
                <div style={{display: 'flex', justifyContent: "flex-end", alignItems: 'center'}}>
                    <div className={classes.message}>
                        <p style={{marginTop: '20px', color: "#919191"}}>{text}</p>
                        <span style={{position: 'absolute', right: '10px', top: '4px', color: "#EBE51E"}}>- {user}</span>
                    </div>
                </div>
            </Grid>
        )
        : (
            <Grid>
                <div style={{display: 'flex', justifyContent: "flex-start", alignItems: 'center'}}>
                    <div className={classes.message} style={{backgroundColor: '#d1d1d1'}}>
                        <p style={{marginTop: '20px', color: "#474747"}}>{text}</p>
                        <span style={{position: 'absolute', right: '10px', top: '4px', color: "#757575"}}>- {user}</span>
                    </div>
                </div>
            </Grid>
        )
    )
}

export default Messages
