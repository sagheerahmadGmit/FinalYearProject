import './styles.css';
import React from 'react';
import ScriptJS from './script';

export default class StickyNotes extends React.Component {
    
    var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;


xIcon.addEventListener("click", function () {
    typeNote();
});

checkIcon.addEventListener("click", function () {
    createNote();
});

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