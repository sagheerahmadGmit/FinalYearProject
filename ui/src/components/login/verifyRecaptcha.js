import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'
import Recaptcha from 'react-recaptcha';

class ExampleComponent extends Component {
  
    constructor(props) {
        super(props)
    
        this.handleSubscribe = this.handleSubscribe.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    
        this.state = {
          isVerified: false
        }
      }
    
      recaptchaLoaded() {
        console.log('capcha successfully loaded');
      }
    
      handleSubscribe() {
        if (this.state.isVerified) {
          alert('You have successfully subscribed!');
        } else {
          alert('Please verify that you are a human!');
        }
      }
    
      verifyCallback(response) {
        if (response) {
          this.setState({
            isVerified: true
          })
        }
      }

  render() {
    return (
      <div>
        {/* You can replace captchaDemo with any ref word */}
        <Recaptcha
            sitekey="6Ldi30kaAAAAAB-s23M3RgtglRbwufDmGa21Od6E          "
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
        />
      </div>
    );
  };
};
export default ExampleComponent;