import React, { Component } from 'react';
import FieldGroup from './../FieldGroup';

class Title extends Component {
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
        id="title"
        type="text"
        label="Title"
        placeholder="Brief Title"
        disabled={this.props.disabled}
        value={this.state.value || ''}
        onChange={this.handleChange}
      />
    )
  }
}

export default Title;
