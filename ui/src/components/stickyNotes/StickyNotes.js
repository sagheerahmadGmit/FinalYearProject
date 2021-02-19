import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import './sticky_note.css';

export default class MyApp extends Component {
	constructor(props) {
		super(props);
	}  
	render() {
		return (
      <div className="divSticky">
        
        <ReactStickyNotes />
        
      </div>
		)
	}
};