import React from 'react';
import Editor from './Editor/Editor';
import Sidebar from './Sidebar/Sidebar';
import '../Notepad/Editor/styles'
import '../Notepad/Sidebar/styles'
import './notepadd.css'
import firebase from 'firebase';


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
                    deleteNote={this.deleteNote}
                    selectNote={this.selectNote}
                    newNote={this.newNote}
                />
                {
                    this.state.selectedNote ?
                        <Editor
                            selectedNote={this.state.selectedNote}
                            selectedNoteIndex={this.state.selectedNoteIndex}
                            notes={this.state.notes}>

                        </Editor> :
                        null
                }



            </div>
        );
    }

    componentDidMount = () => {
        firebase
            .firestore()
            .collection('notes')
            .onSnapshot(serverUpdate => {
                const notes = serverUpdate.docs.map(_doc => {
                    const data = _doc.data();
                    data['id'] = _doc.id;
                    return data;
                });
                console.log(notes);
                this.setState({notes: notes});
            });
    }

    selectNote = (note, index) => this.setState({selectedNoteIndex: index, selectedNote: note});

}
