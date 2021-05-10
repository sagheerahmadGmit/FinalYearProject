import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Copyright, ConfirmUser } from '../register/utils';
import RecaptchaVerify from './verifyRecaptcha';

//css for the login page
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginTop: '56px',
    },
    image: {
        // generate a new image everytime the user reloads the page
        backgroundImage: 'url(https://source.unsplash.com/featured/?software)',
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

// send the user details to the server to see if the user exists and log in the user
export default function Login() {
    const classes = useStyles();
    // save the user details into variables that will be sent to the backend for logging the user
    const [fName, setfName] = useState(0);
    const [password, setPassword] = useState(0);
    const [verifyLogin, setVerifyLogin] = useState(0);
    const history = useHistory();

    //when the user presses submit then send the details to the spring application
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        //send request with the following details
        let details = {
            username: fName,
            password: password
        };

        // get the response back from the server for logging in the user
        await ConfirmUser(details).then(response => {
            //login the user into the the chat engine also
            // if the login is scuccessful,
            // then alert the user and take them to the home page
            if(response.accessToken){
                history.push("/")
                alert(fName + " ,you have successfully logged in!!")
                localStorage.setItem('username', response.username);
                localStorage.setItem('password', password);
                window.location.reload();
            }
            else{
                //the credentials did not meet the required criteria
                alert("Incorrect details")
            }
        });

    }
//create a form to ake in the user details
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {/*Take in the username and save it to the given variable so that it can be sent to the server*/}
                    <form className={classes.form} onSubmit={handleSubmit} validate="true">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => setfName(e.target.value)}
                        />
                        {/*Take in the user password and save it to the given variable so that it can be sent to the server*/}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                    {/*    verify the recaptcha*/}
                    <RecaptchaVerify/>
                        {/*submit button to send request for login*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        {/*if the user does not have an account they can follow this link and sign up*/}
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link to='/register' href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}