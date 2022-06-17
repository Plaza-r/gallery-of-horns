import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
    render() {
      return(
  
        <Modal show={this.props.showModal} onHide={this.props.hideModal}>
  
          <Modal.Header closeButton>
  
            {this.props.pickedBeast.title}
            
          </Modal.Header>
  
          <Image src={this.props.pickedBeast.image_url} alt={this.props.pickedBeast.title}/>
  
          <Modal.Body>{this.props.pickedBeast.description}</Modal.Body>
  
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
          </Modal.Footer>
  
        </Modal>
  
      );
    }
  }
  
  export default SelectedBeast;
  