import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import Multiselect from './Multiselect'
import CreatableMultiselect from './CreatableMultiselect'
import CommitButtons from './CommitButtons'

import './Form.css';
import 'react-select/dist/react-select.css';
import 'react-select2-wrapper/css/select2.css';


function FieldGroup({ id, label, ...props }) {
  return (
    <Col xs={12} md={8}>
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    </Col>
  );
}

class Form extends Component {

  render() {
    const disabled = false;

    return (
      <form>
        <PageHeader>New Invention</PageHeader>
        <FieldGroup
          id="title"
          type="text"
          label="Title"
          placeholder="Brief Title"
          disabled={disabled}
        />
        <Col xs={12} md={8}>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              type="text"
              placeholder="Description of your invention!"
              disabled={disabled}
            />
          </FormGroup>
        </Col>
        <FieldGroup
          id="username"
          type="text"
          label="User Name (optional)"
          disabled={disabled}
        />
        <FieldGroup
          id="email"
          type="email"
          label="Email Address (optional)"
          disabled={disabled}
        />
        <Col xs={12} md={8}>
          <FormGroup>
            <ControlLabel>Bits</ControlLabel>
            <Multiselect
              placeholder="Select at least one Bit"
              disabled={disabled}
            />
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormGroup>
            <ControlLabel>Materials (optional)</ControlLabel>
            <CreatableMultiselect
              disabled={disabled}
            />
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormButtons isEditing={disabled}/>
        </Col>
      </form>
    );
  };
}

function FormButtons(props) {
  const editing = props.isEditing;
  if (editing) {
    return <Button bsStyle="primary" id="edit">Edit</Button>;
  }
  else {
    return <CommitButtons/>;
  }
}

export default Form;
