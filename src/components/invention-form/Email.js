import React, { Component } from 'react';
import FieldGroup from './../FieldGroup';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  render () {
    return (
      <FieldGroup
        id="email"
        type="email"
        inputRef={ (input) => { this.email = input }}
        label="Email Address (optional)"
        disabled={this.props.disabled}
        value={this.state.value || ''}
        onChange={this.handleChange}
      />
    )
  }
}

export default Email;
