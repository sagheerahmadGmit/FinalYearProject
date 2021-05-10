// imports
import React, { useState } from 'react';
import './navstyles.css';
import logo from '../../Images/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';

export default class Navigation extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    // handle the navbar
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        });
    };

    // handle the sidebar
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        // check if the sidebar is open
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        // if the user is not logged in use the normal navbar
        if (!localStorage.getItem('username')) {
            return (
                <div style={{ height: '100%' }}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <main>
                    </main>
                </div>
            )
        }
        else { // use the logged in navbar when the user is logged in
            return (
                <div style={{ height: '100%' }}>
                    <LoggedToolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawerLogged show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <main>
                    </main>
                </div>
            )
        }
    }
}

// logout function
const logout = () => {
    // clear the local storage
    console.log("Logged Out");
    localStorage.clear();

}

// normal navbar when not logged in
const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/"><img src={logo} width={100} height={75} alt="Logo" /></a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

// function when logged in changes the navbar
const LoggedToolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/"><img src={logo} width={100} height={75} alt="Logo" /></a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/notepad">Notepad</a></li>
                    <li><a href="/notes">Sticky Notes</a></li>
                    <li><a href="/forum">Forum</a></li>
                    <li><a href="/chat">Messenger</a></li>
                    <li className="usernameList">Hi, {localStorage.getItem("username")}</li>
                </ul>
            </div>
            <div className="dropdown">
                    <Dropdown className="dropdown2" id="dropdown-item-button" title="">
                        <Dropdown.Item as="button" onClick={() => logout()}>
                        <a href="/" >Logout</a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
        </nav>
    </header>
);

// button to open the side drawer
const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

// sidebar when the user is logged in
const SideDrawerLogged = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/notepad">Notepad</a></li>
                <li><a href="/stickyNotes">Sticky Notes</a></li>
                <li><a href="/forum">Forum</a></li>
                <li><a href="/chat">Messenger</a></li>
                <li onClick={() => logout()}><a href="/" >Logout</a></li>
            </ul>
        </nav>
    )
};

// sidebar when the user is not logged in
const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact us</a></li>
            </ul>
        </nav>
    )
};

// close the sidebar
const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />
)