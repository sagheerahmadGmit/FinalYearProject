//import the required classes
import React from 'react'
import { GetData } from '../services/DataService'
//test class to see if the user details are being saved to the database
class DataComponent extends React.Component {
    state = {
        users: []
    }

    // get the data for users from the database
    async componentDidMount() {
        //call the getData method from the services class
        let Data = await GetData()
        console.log(Data)
        this.setState({
            users: Data
        });
    }

    //create a table and output the user details onto the table
    render() {
        return (
            <div>
                <h1 className="text-center"> Data List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/*The table headers*/}
                            <td> User Id</td>
                            <td> User First Name</td>
                        </tr>

                    </thead>
                    <tbody>
                        {/*The details that will be output onto the table*/}
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td> {user.id}</td>
                                        <td> {user.name}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataComponent