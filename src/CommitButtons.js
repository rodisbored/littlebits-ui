import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';


class CommitButtons extends Component {
  render() {
    return (
      <FormGroup>
        <Button bsStyle="primary" id="save">Save</Button>
        <Button bsStyle="link" id="cancel">Cancel</Button>
      </FormGroup>
    );
  }
}

export default CommitButtons;
