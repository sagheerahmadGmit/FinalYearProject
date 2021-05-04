export const Header = () => {
    return (
        <h1>Contact Us</h1>
    );
};

export const SendEmail = async (details) => {
    let response = await fetch(`http://${window.location.hostname}:5000/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    return await response.json();
}