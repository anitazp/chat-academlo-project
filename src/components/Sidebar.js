import { Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'

const Sidebar = ({roomData}) => {
    const classes = styles()
    const [room, setRoom] = useState([])
    const [listUsers, setListUsers] = useState([])


    useEffect(() => {
        if(roomData) {
            setRoom(roomData)
            setListUsers(roomData.users)
        }
    }, [roomData])

    

    return (
        <Container className={classes.sidebar}>
            {
                roomData ? 
                <Grid>
                    <Grid className={classes.sidebarRoom}>
                        <Typography variant="subtitle1" color="initial" align="center" className={classes.sidebarTitle}>ROOM</Typography>
                        <Typography variant="h6" color="initial" className={classes.sidebarItems}>{room.room}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1" color="initial" align="center" className={classes.sidebarTitle}>USERS</Typography>
                        {listUsers ? listUsers.map((item) => (
                            <Typography variant="h6" color="initial" key={item.id} className={classes.sidebarItems}>{item.name}</Typography>
                        )) : <span></span>}
                    </Grid>
                </Grid>
                :
                <span>Loading...</span>
            }
        </Container>
    )
}

export default Sidebar
