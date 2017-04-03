import React, { Component } from 'react';
import FieldGroup from './../FieldGroup';

class Username extends Component {
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
      <FieldGroup
        id="username"
        type="text"
        inputRef={ (input) => { this.username = input }}
        label="User Name (optional)"
        disabled={this.props.disabled}
        value={this.state.value || ''}
        onChange={this.handleChange}
      />
    )
  }
}

export default Username;
