import React from 'react';
import './styles.css';
import Name from './name';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="form-app">
                    <Name />
                </div>
            </div>
        );
    }
}