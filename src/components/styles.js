import { brown } from '@material-ui/core/colors'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(() => ({
    sidebar: {
        backgroundColor: "#795548",
        height: "100vh",
        padding: '20px 10px',
        color: "#f2f2f2"
    },
    sidebarRoom: {
        marginBottom: "40px"
    },
    sidebarTitle: {
        fontWeight: "bold",
    },
    sidebarItems: {
        marginLeft: '20px',
        marginTop: '20px'
    },
    chatContainer: {
        backgroundColor: "#f2f2f2",
        padding: "40px 20px",
        height: "90vh"
    },
    inputMessage: {
        height: "10vh",
        backgroundColor: "green" 
    },
}))

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: brown[600],
            dark: brown[500],
            light: brown[400]
        }
    }
})

export {
    styles,
    theme
}