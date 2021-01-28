import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home';
import About from './components/About';
import Contact from './components/Contact/contact';
import Error from './components/Error';
import Navigation from './components/NavBar/Navigation';
import DataComponent from "./components/DataComponent";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer/testFooter";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/dataTest" component={DataComponent}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;