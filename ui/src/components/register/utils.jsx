//import the required classes
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

//this class contains the utilities that are used by multiple classes such as sending requests
//and getting responses
export const Header = () => {
    return (
        <h1>Register</h1>
    );
};

//display the copywrite logo for the website
export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Student Hub
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

//send a request to the server to register a user and save their details
export const SaveUser = async (details) => {
    //send the request to either local host or aws cloud
    //let response = await fetch(`http://${window.location.hostname}:8080/api/auth/signup`, {
    let response = await fetch(`http://localhost:8085/api/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    //return the response
    return await response.json();
}

//send a request to the server to log in a user and authenticate their details
export const ConfirmUser = async (details) => {
    //send the request to either local host or aws cloud
    //let response = await fetch(`http://${window.location.hostname}:8080/api/auth/signin`, {
    let response = await fetch(`http://localhost:8085/api/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    return await response.json();
}

//register the user to the chat engine api
//which will be used to talk to other students
export async function postData(url = '', data = {}, privateKey) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'PRIVATE-KEY': privateKey,
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}