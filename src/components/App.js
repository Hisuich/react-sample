import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <Header />
          <Body store={this.props.store}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
