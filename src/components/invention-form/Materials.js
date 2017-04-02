import React, { Component } from 'react';

import Request from 'superagent';

import _ from 'lodash';

import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import CreatableMultiselect from './../CreatableMultiselect';

function GetMaterialOptions(materials) {
  return (
    _.map(materials, (material) => {
      return (
        { label: material.name, value: material.name }
      )
    })
  )
}

class Materials extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    var url = "http://localhost:3000/materials/";
    Request.get(url).then((response) => {
      this.setState({
        materials: response.body
      })
    });
  }

  render() {
    return (
      <Col xs={12} md={8}>
        <FormGroup>
          <ControlLabel>Materials (optional)</ControlLabel>
          <CreatableMultiselect
            disabled={this.props.disabled}
            options={GetMaterialOptions(this.state.materials)}
          />
        </FormGroup>
      </Col>
    )
  }
}

export default Materials;