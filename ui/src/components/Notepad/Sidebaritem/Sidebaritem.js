// imports
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../../../helpers/helpers';

class SidebarItemComponent extends React.Component {

    render()
    {
        // constant
        const {_index, _note, classes, selectedNoteIndex} = this.props;

        return (
            <div key={_index}>
                <!-- List the notes -->
                <ListItem
                    className={classes.listItem}
                    selected={selectedNoteIndex === _index}
                    alignItems={'flex-start'}>
                    <div
                        className={classes.textSection}
                        // select a note
                        onClick={() => this.selectNote(_note,_index)}>
                        <!-- Show the first few texts of a note -->
                        <ListItemText
                            primary={_note.title}
                            secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}>
                        </ListItemText>
                    </div>
                    <!-- Delete the icon when a note is deleted -->
                    <DeleteIcon
                        onClick={() => this.deleteNote(_note)}
                        className={classes.deleteIcon}>
                    </DeleteIcon>
                </ListItem>
            </div>
        );
    }

    // select or delete a note
    selectNote = (n,i) => this.props.selectNote(n,i);
    deleteNote = (note) => {
        // check with the user are they sure to delete a note
        if(window.confirm(`Are you Sure you want to Delete: ${note.title}`)){
            this.props.deleteNote(note);
        }
    }

}

// export SidebarItemComponent
export default withStyles(styles)(SidebarItemComponent);