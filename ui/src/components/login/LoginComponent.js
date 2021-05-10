import React from 'react'
import { GetData } from './LoginService'

//this was test class that we created to see if the database was saving user to the server
//we created a table and outputted the table to the screen
class LoginComponent extends React.Component {
    state = {
        users: []
    }

    //get the user data
    async componentDidMount() {
        let Data = await GetData()
        console.log(Data)
        this.setState({
            users: Data
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/*Table headings*/}
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email</td>
                            <td> User Password</td>
                        </tr>

                    </thead>
                    <tbody>
                        {/*Insert the data into the table under the given heading*/}
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.email}>
                                        <td> {user.fName}</td>
                                        <td> {user.sName}</td>
                                        <td> {user.email}</td>
                                        <td> {user.password}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
//export the class
export default LoginComponent