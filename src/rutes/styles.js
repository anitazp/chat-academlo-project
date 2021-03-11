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
        background: "linear-gradient(90deg, rgba(141,110,99,1) 0%, rgba(162,142,135,1) 50%, rgba(141,110,99,1) 100%)"
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
        color: '#795548'
    },
    // chat
    grid: {
        display: "flex"
    },
}))

const theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#0066ff',
            main: brown[600],
        }
    }
})

export {
    styles,
    theme
}