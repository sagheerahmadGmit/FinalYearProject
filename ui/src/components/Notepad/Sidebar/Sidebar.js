// imports
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../Sidebaritem/Sidebaritem';

class SidebarComponent extends React.Component {
    // constructor
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        }
        };

    render()
    {
        const {notes, classes, selectedNoteIndex} = this.props;

        // check if there are any notes
        if(notes){
            return (
                <div className={classes.sidebarContainer}>
                    {/*Button to create a new note*/}
                    <Button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}
                    >{this.state.addingNote ? 'Cancel' : 'New Note'}</Button>
                    {
                        this.state.addingNote ?
                            <div>
                                {/*Enter a note title*/}
                                <input
                                    type='text'
                                    className={classes.newNoteInput}
                                    placeholder='Enter Note Title'
                                    onKeyUp={(e => this.updateTitle(e.target.value))}
                                />
                                {/*Add the note*/}
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}>Submit Note</Button>
                            </div> :
                            null
                    }
                    <List>
                    {
                        // show all the notes that have been created
                        notes.map((_note, _index) => {
                            return(
                                <div key={_index}>
                                    <SidebarItem
                                        _note={_note}
                                        _index={_index}
                                        selectedNoteIndex={selectedNoteIndex}
                                        selectNote={this.selectNote}
                                        deleteNote={this.deleteNote}>
                                    </SidebarItem>
                                    <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
                </div>
            );
        }
        else {
            return(<div></div>);
        }
    }

    // function for new note
    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }

    // function to update the title
    updateTitle = (txt) => {
        this.setState({ title: txt });
    }

    // function to creating a new note
    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }

    // select and delete a note
    selectNote = (n,i) => this.props.selectNote(n,i);
    deleteNote = (note) => this.props.deleteNote(note);
}

// export SidebarComponent
export default withStyles(styles)(SidebarComponent);