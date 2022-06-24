import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json'
import Modal from 'react-bootstrap/Modal'
import SelectedBeast from './SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pickedBeast: '',
      

    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  openModal = (beast) => {
    this.setState({
      showModal: true,
      pickedBeast: beast,

    })
  };

  

  render() {
    return (
      <>
        <Header/>
        <Main data= {data}
          openModal = {this.openModal}
        />
        <SelectedBeast
          showModal = {this.state.showModal}
          hideModal = {this.handleOnHide}
          pickedBeast = {this.state.pickedBeast}
        />
       
        <Footer/>
      </>
    );
  }
}

export default App;