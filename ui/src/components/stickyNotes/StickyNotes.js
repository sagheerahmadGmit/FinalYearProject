import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
 
export default class StickyNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [{
                text:'',
                color: "#ffffff",
                marginTop: "5px",
        	}]
        }
    }  
    render() {
        return (
            <ReactStickyNotes
                notes={this.state.notes}
                icons={this.state.icons}
                width={'100%'}
                height={'100%'}
            />
        )
    }
}