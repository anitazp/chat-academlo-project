import { brown } from '@material-ui/core/colors'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(() => ({
    sidebar: {
        background: "linear-gradient(0deg, rgba(134,82,231,1) 0%, rgba(79,8,230,1) 100%)",
        height: "100vh",
        padding: '20px 10px',
        color: "#f2f2f2",
        maxWidth: "100%"
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
        position: 'relative',
        backgroundColor: "#f2f2f2",
        padding: "40px 20px",
        height: "90vh",
        overflow: 'auto',
        maxWidth: "100%"
    },
    leave: {
        position: "absolute",
        right: "10px",
        top: "10px",
        textDecoration: "none"
    },
    inputMessage: {
        height: "10%",
        alignItems: "center",
        backgroundColor: "#ededed",
        borderTop: "2px solid #e3e3e3",
        padding: "6px 20px",
        maxWidth: "100%"
    },
    marginBottom: {
        marginBottom: '1rem'
    },
    row: {
        display: 'flex'
    },
    getText: {
        background: "#e3e3e3",
    },
    shadow: {
        boxShadow: "0 .125rem .25rem rgba(225,225,225,.075)!important",
        marginBottom: "20px"
    },
    message: {
        display: 'inline-block',
        backgroundColor: "#451ac7",
        padding: '10px 20px',
        borderRadius: '10px',
        margin: '10px 10px',
        position: 'relative'
    }
}))

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: "#4D00FF",
        }
    }
})

export {
    styles,
    theme
}