// imports
import React from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import debounce from "../../../helpers/helpers";

class EditorComponent extends React.Component {
    // constructor
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }

    componentDidMount = () => {
        // set the state of the title, id and body of the note
        this.setState({
            text:this.props.selectedNote.body,
            title:this.props.selectedNote.title,
            id:this.props.selectedNote.id
        });
    }

    componentDidUpdate = () => {
        if (this.props.selectedNote.id !== this.state.id) {
            this.setState({
                text:this.props.selectedNote.body,
                title:this.props.selectedNote.title,
                id:this.props.selectedNote.id
            });
        }
    }



    render() {

        const { classes } = this.props;

        return(
            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                <input
                    className={classes.titleInput}
                    placeholder='Note Title...'
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}/>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}
                />
            </div>
        );
    }

    // update the body of a note
    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    };

    // update teh title of a note
    updateTitle = async (txt) => {
        await this.setState({ title: txt });
        this.update();
    }

    // debounce, this means when updating the note it wont update until 1500 milliseconds of the user not typing
    // this just lets the application to run faster
    update = debounce(() => {
        this.props.noteUpdate(this.state.id, {title: this.state.title, body:this.state.text})
    }, 1500);
}

// export EditorComponent
export default withStyles(styles)(EditorComponent);