import React from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import debounce from "../../../helpers/helpers";

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }

    render() {

        const { classes } = this.props;

        return(
            <div className={classes.editorContainer}>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}
                />
            </div>
        );
    }

    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    };

    update = debounce(() => {
        /*this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })*/
        console.log('Updating');
    }, 1500);
}

export default withStyles(styles)(EditorComponent);