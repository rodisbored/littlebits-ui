import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps !== undefined) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  render () {
    return (
      <Col xs={12} md={8}>
        <FormGroup controlId="description">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            type="text"
            placeholder="Description of your invention!"
            disabled={this.props.disabled}
            value={this.state.value || ''}
            onChange={this.handleChange}
          />
        </FormGroup>
      </Col>
    )
  }
}

export default Description;
