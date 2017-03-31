import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import Multiselect from './Multiselect'
import CreatableMultiselect from './CreatableMultiselect'

import './Form.css';
import 'react-select/dist/react-select.css';
import 'react-select2-wrapper/css/select2.css';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <Col xs={12} md={8}>
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    </Col>
  );
}

class Form extends Component {
  render() {
    return (
      <form>
        <PageHeader>New Invention</PageHeader>
        <FieldGroup
          id="title"
          type="text"
          label="Title"
          placeholder="Brief Title"
        />
        <Col xs={12} md={8}>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              type="text"
              placeholder="Description of your invention!"
            />
          </FormGroup>
        </Col>
        <FieldGroup
          id="username"
          type="text"
          label="User Name (optional)"
        />
        <FieldGroup
          id="email"
          type="email"
          label="Email Address (optional)"
        />
        <Col xs={12} md={8}>
          <FormGroup>
            <ControlLabel>Bits</ControlLabel>
            <Multiselect
              placeholder="Select at least one Bit"
            />
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormGroup>
            <ControlLabel>Materials (optional)</ControlLabel>
            <CreatableMultiselect />
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormGroup>
            <Button bsStyle="primary">Save</Button>
            <Button bsStyle="link">Cancel</Button>
          </FormGroup>
        </Col>
      </form>
    );
  };
}

export default Form;
