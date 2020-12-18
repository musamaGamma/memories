import {makeStyles} from '@material-ui/core'

export default makeStyles((theme)=> ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
          },
    },
    paper: {
        padding: theme.spacing(2)
    },
    form: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    fileInput: {
        width: "97%",
        margin: "10px 0"
    },
    buttonSubmit: {
        marginBottom: 10
    }
}))