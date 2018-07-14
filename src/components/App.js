import React, { Component } from 'react';
import '../styles/app.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="main">
        <div className="container-fluid">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
