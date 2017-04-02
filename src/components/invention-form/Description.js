import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const Description = ({disabled, defaultValue, value}) => {
  return (
    <Col xs={12} md={8}>
      <FormGroup controlId="description">
        <ControlLabel>Description</ControlLabel>
        <FormControl
          componentClass="textarea"
          type="text"
          placeholder="Description of your invention!"
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
        />
      </FormGroup>
    </Col>
  )
}

export default Description;
