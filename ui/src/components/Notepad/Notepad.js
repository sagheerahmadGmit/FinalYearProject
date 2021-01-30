import React from 'react';
import Editor from './Editor/Editor';
import Sidebar from './Sidebar/Sidebar';
import '../Notepad/Editor/styles'
import '../Notepad/Sidebar/styles'
import './notepadd.css'

export default class Notepad extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Editor />
            </div>
        );
    }
}