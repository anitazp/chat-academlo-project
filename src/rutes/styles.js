import { brown } from '@material-ui/core/colors'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
    },
    backGround: {
        background: "linear-gradient(90deg, rgba(189,189,189,1) 0%, rgba(237,237,237,1) 50%, rgba(189,189,189,1) 100%)",
        height: "100vh"
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    card: {
        width: "400px",
        display: "flex",
        flexDirection: 'column',
        padding: "10px"
    },
    marginBottom: {
        marginBottom: "20px"
    },
    button: {
        padding: "10px"
    },
    title: {
        color: '#5B00A6',
        marginBottom: '20px'
    },
    // chat
    grid: {
        display: "flex"
    },
    users: {
        marginBottom: "20px",
        textAlign: 'center',
        color: "#bfbfbf"
    },
    link: {
        textDecoration: "none"
    }
}))

const theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#EBE51E',
            main: "#4D00FF",
        }
    }
})

export {
    styles,
    theme
}