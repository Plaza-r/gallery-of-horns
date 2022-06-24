import React from 'react';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: 0
    };
  };

  handleFaves = () => {
    this.setState({

        faves: this.state.faves + 1,
        
    });
  };

  render() {
    return (
      <Col className="mt-4">
        <Card style={{width: '18rem'}} className="h-100 p-3 card-container">

          <Card.Title>
            {this.props.title}
          </Card.Title>

          <Card.Text>
            {this.state.faves} ❤️ Favorites
          </Card.Text>

          <Card.Img 
            className="card-image"
            variant='top' 
            style={{cursor:'pointer'}} 
            src={this.props.imageUrl} 
            alt={this.props.description} 
            title={this.props.title}
            onClick={()=> {this.props.openModal(this.props.beast)}}
          />
          <Button className="mt-3" variant="primary" onClick={this.handleFaves}>Favorite!</Button>

          <Card.Body>

          <Card.Text>
            {this.props.description}
          </Card.Text>


        </Card.Body>

        </Card>
      </Col>
      
      
        
      
    );
  }
}

export default HornedBeast;