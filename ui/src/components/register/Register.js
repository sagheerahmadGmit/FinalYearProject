//import the required classes
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Copyright, SaveUser, postData } from './utils';
import { useHistory } from "react-router-dom";

//css used for the class
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // generate a new image everytime the user reloads the page
    backgroundImage: 'url(https://source.unsplash.com/featured/?Computers,software)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  // save the user details into variables that will be sent to the backend for registering the user
  const classes = useStyles();
  const [fName, setfName] = useState(0);
  const [sName, setsName] = useState(0);
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const history = useHistory();

  let verify = false;

  //when the user presses submit then send the details to the spring application
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    //send request with the following details
    let details = {
      username: fName,
      email: email,
      password: password,
      // give the role of user
      roles: ["user"]
    };

    //register the user into the the chat engine also
    await postData('https://api.chatengine.io/users/', { username: fName, secret: password }, '30535aad-5cc0-484f-ba89-c4d44c78d944').then(data => {
      console.log(data); // JSON data parsed by `data.json()` call

    });

    // get the response back from the server for registering the user
    await SaveUser(details).then(response => {

      console.log(response);

      // if the registerion is scuccessful,
      // then alert the user and take them to the login page
      if(response.message === "User registered successfully!"){
          history.push("/login")
          alert("You have successfully Registered!!")
          verify = true;
      }
      else{
        //the credentials did not meet the required criteria
          alert(response.message ? response.message : "The details entered are incorrect!!")
      }
  });
  
  }
//create a form to take in the user details
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
          </Typography>
        {/*Take in the username and save it to the given variable so that it can be sent to the server*/}
        <form className={classes.form} onSubmit={handleSubmit} validate="true">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="UserName"
                onChange={e => setfName(e.target.value)}
                autoFocus
              />
            </Grid>
            {/*Take in the user fullname and save it to the given variable so that it can be sent to the server*/}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Full Name"
                name="lastName"
                autoComplete="lname"
                onChange={e => setsName(e.target.value)}
              />
            </Grid>
            {/*Take in the user email and save it to the given variable so that it can be sent to the server*/}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            {/*Take in the user password and save it to the given variable so that it can be sent to the server*/}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {/*The suer wants to receive promotional emails*/}
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          {/*Submit the details to the database*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
        </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {/*allow the user to sign in if they already have an account*/}
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}