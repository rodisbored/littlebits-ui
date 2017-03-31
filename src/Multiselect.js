import React from 'react';
import Select from 'react-select';

const FLAVOURS = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel' },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' },
];

var Multiselect = React.createClass({
  displayName: 'Multiselect',
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  getInitialState () {
    return {
      disabled: false,
      crazy: false,
      options: FLAVOURS,
      value: [],
    };
  },
  handleSelectChange (value) {
    this.setState({ value });
  },
  render () {
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select multi simpleValue value={this.state.value} placeholder={this.props.placeholder} options={this.state.options} onChange={this.handleSelectChange} />
      </div>
    );
  }
});

module.exports = Multiselect;
