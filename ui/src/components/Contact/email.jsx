import React from 'react';
import Message from './message';
import Name from './name';
import { Header } from './utils';

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

    validate() {
        return (
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
        );
    }

    handleBlur = () => {
        if (!this.validate()) {
            this.setState({ errorMessage: "A valid email address is required!" })
        } else {
            this.setState({ errorMessage: "" });
        }
    }

    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = (event) => {
        if (!this.validate()) {
            event.preventDefault();
            return;
        } else {
            event.preventDefault();
            this.setState({ clearScreen: true, emailSubmitted: true });
        }
    }

    handleReset = () => {
        this.setState({ clearScreen: true, resetForm: true });
    }

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
        if (this.state.emailSubmitted) {
            return (
                <Message name={this.state.name} email={this.state.email} />
            );
        }
        if (this.state.resetForm) {
            return (
                <Name />
            );
        }
    }
}
