import React, { Component } from 'react';

import Request from 'superagent';

import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import _ from 'lodash';

import Multiselect from './../Multiselect';
import FormatOptions from './../FormatOptions';

function GetBitOids(bits) {
  return (
    _.map(bits, (bit) => {
      return (
        { label: bit.oid, value: bit.oid }
      )
    })
  )
}

class Bits extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    var url = "http://localhost:3000/bits/";
    Request.get(url).then((response) => {
      this.setState({
        bits: response.body
      })
    });
  }

  render () {
    return (
      <Col xs={12} md={8}>
        <FormGroup>
          <ControlLabel>Bits</ControlLabel>
          <Multiselect
            values={this.props.values}
            placeholder="Select at least one Bit"
            disabled={this.props.disabled}
            options={GetBitOids(this.state.bits)}
          />
        </FormGroup>
      </Col>
    )
  }
}

export default Bits;
