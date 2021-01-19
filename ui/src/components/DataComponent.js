import React from 'react'
import DataService from '../services/DataService'

class DataComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        DataService.getData().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Data List</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>

                        <td> User Id</td>
                        <td> User First Name</td>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key = {user.id}>
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