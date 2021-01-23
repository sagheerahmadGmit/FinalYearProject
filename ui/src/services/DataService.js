export const GetData = async () => {
    try {
        //fetch the response and the data from the flask api
        const fetchResponse = await fetch(`http://localhost:8080/getTest`);
        const data = await fetchResponse.json();
        //return the predicted data to the user
        console.log(data)
        return data;
    } catch (e) {
        //catch the errors
        return e;
    }
}
