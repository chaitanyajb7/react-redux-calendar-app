import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './App.css';
import CalenderContainer from './calender/CalenderContainer.js';

class App extends Component {
  render() {
    return (
      <Container fluid className="blue">
        <CalenderContainer />
      </Container>
    );
  }
}

export default connect()(App);
