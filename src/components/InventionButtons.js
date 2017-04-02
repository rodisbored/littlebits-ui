import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class InventionButtons extends React.Component {
  render() {
    return (
      <FormGroup>
        <Button bsStyle="primary"
          id={this.props.submitId}
          href={this.props.submitLink}>
          {this.props.submitText}
        </Button>
        <Button bsStyle="link" id="cancel" href={this.props.cancelLink}>Cancel</Button>
      </FormGroup>
    );
  }
}

export default InventionButtons;
