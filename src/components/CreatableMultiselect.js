import React from 'react';
import { Creatable } from 'react-select';

function shouldKeyDownEventCreateNewOption ({ keyCode }) {
  switch (keyCode) {
    case 13: // ENTER
    case 32: // SPACE
    case 188: // COMMA
      return true;
  }
  return false;
};

var CreatableMultiselect = React.createClass({
  displayName: 'CreatableMultiselect',
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
      value: []
    };
  },
  componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.values });
  },
  handleSelectChange (value) {
    this.setState({ value });
  },
  render () {
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Creatable multi
          simpleValue
          ref={ (input) => { this.materials = input }}
          value={this.state.value}
          disabled={this.props.disabled}
          placeholder={this.state.placeholder}
          options={this.props.options}
          onChange={this.handleSelectChange}
          shouldKeyDownEventCreateNewOption={shouldKeyDownEventCreateNewOption}
        />
      </div>
    );
  }
});

module.exports = CreatableMultiselect;
