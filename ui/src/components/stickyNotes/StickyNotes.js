import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import './sticky_note.css';

export default class MyApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!localStorage.getItem('username')) {
      return (
        <div className="divStickyLogOut">

          <h1>
            Please Login to view this page!!
          </h1>

        </div>
      )
    }
    else {

      return (
        <div className="divSticky">
          <ReactStickyNotes />
        </div>
      )
    }
  }
};