import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json"

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pickedBeast: '',
      
    }
  }

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
  }
  
  
  render() {
    return ( 
      <>
      <Header/>
      <Main data= {data}
      openModal = {this.openModal}
      />
      <selectedBeast
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