import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from './styles'

const Sidebar = () => {
    const classes = styles()

    const roomData = useSelector(reducer => reducer.chat.chatRoom)



    return (
        <Container className={classes.sidebar}>
            {
                roomData ? 
                <Grid>
                    <Grid>
                        <Typography variant="h6" color="initial" className={classes.shadow} align="center">Room</Typography>
                        <Typography variant="subtitle2" color="initial" className={classes.marginBottom} style={{textTransform: 'capitalize'}}>{roomData.room}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6" color="initial" className={classes.shadow} align="center">Users</Typography>
                        {
                            roomData.users ? roomData.users.map((item) => (
                                <Typography variant="subtitle2" color="initial" key={item.id} style={{textTransform: 'capitalize'}}>{item.name}</Typography>
                            ))
                            :
                            <span></span>
                        }
                    </Grid>
                </Grid>
                :
                <span>Loading...</span>
            }
        </Container>
    )
}

export default Sidebar
