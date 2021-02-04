import React from 'react';
import Editor from './Editor/Editor';
import Sidebar from './Sidebar/Sidebar';
import '../Notepad/Editor/styles'
import '../Notepad/Sidebar/styles'
import './notepadd.css'

export default class Notepad extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedNoteIndex: null,
            selectedNote: null,
            notes: null
        };
    }

    render() {
        return (
            <div className="app-container">
                <Sidebar
                    selectedNoteIndex={this.state.selectedNoteIndex}
                    notes={this.state.notes}
                />
                <Editor />
            </div>
        );
    }

    componentDidMount = () => {
        this.setState({notes: !null});
    }
}