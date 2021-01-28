import React from 'react';
import SubmitSuccess from './submitSuccess';
import Name from './name';
import { Header, SendEmail } from './utils';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clearScreen: false,
            messageSubmitted: false,
            resetForm: false,
            name: this.props.name,
            email: this.props.email,
            message: "",
            errorMessage: "",
        };
    }

    validate = () => {
        return (
            this.state.message.length > 0
        );
    }

    handleBlur = () => {
        if (!this.validate()) {
            this.setState({ errorMessage: "A message is required!" });
        } else {
            this.setState({ errorMessage: "" });
        }
    }

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = async (event) => {
        if (!this.validate()) {
            event.preventDefault();
            return;
        } else {
            event.preventDefault();
            this.setState({ clearScreen: true, messageSubmitted: true });

            let details = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            };
            let status = await SendEmail(details);
            alert(status.status);
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
                        <br />
                        <div className="user-info">
                            <span className="ion-ios-mail"></span>
                            <span>&nbsp;&nbsp;{this.state.email}</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-input">
                                <span className="ion-md-create"></span>
                                <textarea value={this.state.value} placeholder="Write your message" rows="4"
                                    autoFocus onBlur={this.handleBlur} onChange={this.handleChange} />
                            </div>
                            <span className="error-message">{this.state.errorMessage}</span>
                            <input type="submit" value="Submit" disabled={!this.validate()} />
                            <input type="button" value="Reset" onClick={this.handleReset} />
                        </form>
                    </div>
                </div>
            );
        }
        if (this.state.messageSubmitted) {
            return (
                <SubmitSuccess name={this.state.name} email={this.state.email} message={this.state.message} />
            );
        }
        if (this.state.resetForm) {
            return (
                <Name />
            );
        }
    }
}