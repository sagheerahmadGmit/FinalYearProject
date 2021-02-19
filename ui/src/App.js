import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home';
import About from './components/About/About';
import Contact from './components/Contact/contact';
import Error from './components/Error';
import Navigation from './components/NavBar/Navigation';
import DataComponent from "./components/DataComponent";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/Footer/footer";
import Notepad from "./components/Notepad/Notepad";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import StickyNotes from './components/stickyNotes/StickyNotes';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/dataTest" component={DataComponent} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/notepad" component={Notepad} />
                        <Route path="/stickyNotes" component={StickyNotes} />
                        <Route component={Error} />
                    </Switch>
                    {/* <MessengerCustomerChat
                        pageId="100009273085257"
                        appId="753869398896741"
                    /> */}
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;