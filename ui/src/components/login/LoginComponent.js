import React from 'react'
import { GetData } from './LoginService'

class LoginComponent extends React.Component {
    state = {
        users: []
    }

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
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email</td>
                            <td> User Password</td>
                        </tr>

                    </thead>
                    <tbody>
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

export default LoginComponent