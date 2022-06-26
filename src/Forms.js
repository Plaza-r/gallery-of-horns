import React from "react";
import { Form } from "react-bootstrap";
import './Forms.css';

class Forms extends React.Component {

  render () {
    return (
      <Form className="form-container">
        <Form.Group className="group-container">
          <Form.Label>Choose Number of Horns ⤵️</Form.Label>
          <Form.Select name= "selected" onChange={this.props.handleSubmit}>
            <option value='all'>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Select>
        </Form.Group>
      </Form>
    )
  };
};

export default Forms;