import React from 'react';
import { Header } from './utils';
export default class Submitconfirm extends React.Component {

    constructor(props) {
        super(props);
    }

    afterSubmission = async (e) => {
    };

    render() {
        return (
            <div>
                <Header />
                <p className="submit-message">Thank you for reaching out! naqi {this.props.email}</p>
                <p>Your email has been submitted and we will be in touch with you shortly.</p>
                <br />
                <h3>Your Message:</h3>
                <br />
                <div className="user-info">
                    <span className="ion-ios-person"></span>
                    <small>&nbsp;&nbsp;{this.props.name}</small>
                </div>
                <br />
                <div className="user-info">
                    <span className="ion-ios-mail"></span>
                    <small>&nbsp;&nbsp;{this.props.email}</small>
                </div>
                <br />
                <div className="user-info">
                    <span className="ion-ios-create"></span>
                    <small>&nbsp;&nbsp;{this.props.message}</small>
                </div>
                <form onSubmit={this.afterSubmission}>
                    <input type="submit" value="Log Another Request" />
                </form>
            </div>
        );
    }
}