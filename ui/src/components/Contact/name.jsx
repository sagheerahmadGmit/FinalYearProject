import React from 'react';
import Email from './email';
import { Header } from './utils';

//this class takes in the user name and changes the dom as the user inputs their name
export default class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHeader: true,
            clearScreen: false,
            nameSubmitted: false,
            name: "",
            errorMessage: "",
        };
    }

    //validate the input
    validate() {
        return (
            this.state.name.length > 0
        );
    }

    //user must input a name
    handleBlur = (event) => {
        if (!this.validate()) {
            this.setState({ errorMessage: "A name is required!" })
        } else {
            this.setState({ errorMessage: "" });
        }
    }

    //change the modal
    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    //submit the name
    handleSubmit = (event) => {
        if (!this.validate()) {
            event.preventDefault();
            return;
        } else {
            event.preventDefault();
            this.setState({ clearScreen: true, nameSubmitted: true });
        }
    }

    //render a form to allow the user to enter in their details
    render() {
        if (!this.state.clearScreen) {
            return (
                <div>
                    <Header />
                    <div className="form-container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-input">
                                <span className="ion-ios-person"></span>
                                <input type="text" value={this.state.value} placeholder="Please enter your name"
                                    onBlur={this.handleBlur} onChange={this.handleChange} />
                            </div>
                            <span className="error-message">{this.state.errorMessage}</span>
                            <input type="submit" value="Next" disabled={!this.validate()} />
                        </form>
                    </div>
                </div>
            );
        }
        // load the next step of the contact page
        if (this.state.nameSubmitted) {
            return (
                <Email name={this.state.name} />
            );
        }
    }
}