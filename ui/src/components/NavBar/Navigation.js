import React from 'react';
import './styles.css';

export default class Navigation extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <main>
                </main>
            </div>
        )
    }
}

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">The LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    )
};

const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />
)