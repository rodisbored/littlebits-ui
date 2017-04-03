import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const FieldGroup = ({ id, label, inputRef, ...props }) => {
  return (
    <Col xs={12} md={8}>
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl ref={inputRef} {...props} />
      </FormGroup>
    </Col>
  );
}

export default FieldGroup;
