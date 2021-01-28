import React from 'react';
import Email from './email';
import { Header } from './utils';

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

    validate() {
        return (
            this.state.name.length > 0
        );
    }

    handleBlur = (event) => {
        if (!this.validate()) {
            this.setState({ errorMessage: "A name is required!" })
        } else {
            this.setState({ errorMessage: "" });
        }
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        if (!this.validate()) {
            event.preventDefault();
            return;
        } else {
            event.preventDefault();
            this.setState({ clearScreen: true, nameSubmitted: true });
        }
    }

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
        if (this.state.nameSubmitted) {
            return (
                <Email name={this.state.name} />
            );
        }
    }
}