import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const Header = () => {
    return (
        <h1>Register</h1>
    );
};

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Student Hub
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const SaveUser = async (details) => {
    let response = await fetch("http://localhost:8080/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    return await response.json();
}