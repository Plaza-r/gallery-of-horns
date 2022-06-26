import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json'
import Forms from './Forms.js'
import SelectedBeast from './SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pickedBeast: '',
      beast: data,
      sortedData: data

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

  handleSubmit = event => {
  
    let selected = event.target.value;
    if (selected === '1') {
      let newData = data.filter(num => num.horns  === 1);
      this.setState({
        sortedData: newData
        });
    } else if (selected === '2') {
      let newData = data.filter(num => num.horns  === 2);
      this.setState({
        sortedData: newData
        });
    } else if (selected === '3') {
        let newData = data.filter(num => num.horns  === 3);
        this.setState({
          sortedData: newData
        });
    } else if (selected === '100') {
          let newData = data.filter(num => num.horns  === 100);
          this.setState({
            sortedData: newData
            
        });
    } else {
      
      this.setState({
        sortedData: data
      });
    }
  }


  

  

  render() {
    return (
      <>
        <Header/>
        <Forms handleSubmit={this.handleSubmit}/>
        <Main data= {this.state.sortedData}
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
