import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import Logo from '../../CommonComponent/logo/index';
// import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateNewUserPage(props) {
  const classes = useStyles();
  const [alert, setAlert] = useState({});
  const [username, setUsername] = useState("");
  // let history = useHistory()

  let createdUsername;
  let alertToRender = { content: "", severity: "" }

  const AreFieldsValid = (username) => {
    return username !== "";
  }

  const SignUp = async () => {
    if (AreFieldsValid(username)) {
      try {
        let res = await axios.post(`http://localhost:3000/soldier`, { name: username})
        createdUsername = res.data.username
        setUsername("")
        alertToRender = { content: `המשתמש ${createdUsername} נוצר בהצלחה`, severity: "success" }
      } catch (err) {
          alertToRender = { content: "קיימת בעיה בשרת, אנא פנה לגורמים הרלוונטים", severity: "error" }
      }
    }
    else { alertToRender = { content: "אחד השדות לא תקין", severity: "error" } }
  }
  

  const renderAlert = () => {
    if (Object.keys(alert).length !== 0 || alert.constructor !== Object) {
      return (<Alert severity={alert.severity}>{alert.content}</Alert>);
    }
  }

  const OnCreateUser = async () => {
    await SignUp();
    setAlert(alertToRender);
  }

  return (
    <div>
      <Container component="main" maxWidth="xs" dir="rtl">
        <CssBaseline />
        <div className={classes.paper} >
          <Logo/>
          <Typography component="h1" variant="h2">
            create soldier
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="UserName"
                  label="name"
                  name="UserName"
                  autoComplete="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => OnCreateUser()}
            >
              create
          </Button>
            {renderAlert()}
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}