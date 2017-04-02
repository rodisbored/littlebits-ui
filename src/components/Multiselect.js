import React from 'react';
import Select from 'react-select';

import FormatOptions from './FormatOptions';

var Multiselect = React.createClass({
  displayName: 'Multiselect',
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    values: React.PropTypes.array,
    options: React.PropTypes.array
  },
  getInitialState () {
    return {
      disabled: false,
      crazy: false,
      options: [],
      value: this.props.values
    };
  },
  handleSelectChange (value) {
    this.setState({ value });
  },
  render () {
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select
          multi
          simpleValue
          value={this.props.values || this.state.value}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          options={this.props.options}
          onChange={this.handleSelectChange}
        />
      </div>
    );
  }
});

module.exports = Multiselect;
