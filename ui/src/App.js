import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
import Board from './components/stickyNotes2/Board';
import Forum from './components/studentForum2/Forum';

import ChatMain from './components/ChatBot/ChatMain';
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>                    
                    {
                        window.location.pathname != '/chat' && <Navigation />
                    }
          
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/dataTest" component={DataComponent} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/notepad" component={Notepad} />
                        <Route path="/chat" component={ChatMain} />
                        <Route path="/notes" component={Board} />
                        <Route path="/forum" component={Forum} />
                        <Route component={Error} />
                        {/* <Redirect to="/" /> */}
                    </Switch>
                    {/* <MessengerCustomerChat
                        pageId="186924869562445"
                        appId="753869398896741"
                    /> */}
                    {
                        window.location.pathname != '/register' && window.location.pathname != '/login' && window.location.pathname != '/Board' && window.location.pathname != '/board' && window.location.pathname != '/chat' && window.location.pathname != '/notepad' && <Footer />
                    }
        
                </div>
            </BrowserRouter>
        );
    }
}

export default App;