import React from 'react';
import Message from './message';
import Name from './name';
import { Header } from './utils';

//this class takes in the user message and changes the dom as the user inputs their message
export default class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clearScreen: false,
            emailSubmitted: false,
            resetForm: false,
            name: this.props.name,
            email: "",
            errorMessage: "",
        };
    }
     //validate the input
    validate() {
        return (
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
        );
    }

    //user must input a email
    handleBlur = () => {
        if (!this.validate()) {
            this.setState({ errorMessage: "A valid email address is required!" })
        } else {
            this.setState({ errorMessage: "" });
        }
    }

    //change the modal
    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    //submit the email
    handleSubmit = (event) => {
        if (!this.validate()) {
            event.preventDefault();
            return;
        } else {
            event.preventDefault();
            this.setState({ clearScreen: true, emailSubmitted: true });
        }
    }

    //reset the form
    handleReset = () => {
        this.setState({ clearScreen: true, resetForm: true });
    }

    //render a form to allow the user to enter in their details
    render() {
        if (!this.state.clearScreen) {
            return (
                <div>
                    <Header />
                    <div className="form-container">
                        <div className="user-info">
                            <span className="ion-ios-person"></span>
                            <span>&nbsp;&nbsp;{this.state.name}</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-input">
                                <span className="ion-ios-mail"></span>
                                <input type="email" value={this.state.value} placeholder="Please enter your email address"
                                    autoFocus onBlur={this.handleBlur} onChange={this.handleChange} />
                            </div>
                            <span className="error-message">{this.state.errorMessage}</span>
                            <input type="submit" value="Next" disabled={!this.validate()} />
                            <input type="button" value="Reset" onClick={this.handleReset} />
                        </form>
                    </div>
                </div>
            );
        }
        //submit the email
        if (this.state.emailSubmitted) {
            return (
                <Message name={this.state.name} email={this.state.email} />
            );
        }
        //if reset then go back to entering name
        if (this.state.resetForm) {
            return (
                <Name />
            );
        }
    }
}
