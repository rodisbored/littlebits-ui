import React, { Component } from 'react';
import Request from 'superagent';

import _ from 'lodash';

import Col from 'react-bootstrap/lib/Col';

import 'react-select/dist/react-select.css';

import InventionButtons from './InventionButtons';

import Heading from './invention-form/Heading';
import Title from './invention-form/Title';
import Description from './invention-form/Description';
import Username from './invention-form/Username';
import Email from './invention-form/Email';
import Bits from './invention-form/Bits';
import Materials from './invention-form/Materials';

const PostInvention = (inventionCreate) => {
  Request
    .post('http://localhost:3000/inventions')
    .send({
      title: inventionCreate.title.title.props.value,
      description: inventionCreate.description.description.props.value,
      bits: inventionCreate.bits.bits.bits.props.value && inventionCreate.bits.bits.bits.props.value.split(","),
      username: inventionCreate.username.username.props.value,
      email: inventionCreate.email.email.props.value,
      materials: inventionCreate.materials.materials.materials.props.value && inventionCreate.materials.materials.materials.props.value.split(",")
    })
    .type('json')
    .accept('json')
    .end(function(err, res){
     if (err || !res.ok) {
       alert('This is super super ugly but: ' + JSON.stringify(res.body));
     } else {
       alert('Invention created successfully');
       inventionCreate.context.router.history.push("/inventions/");
     }
   });
}

class InventionCreate extends Component {
  constructor() {
    super();
    this.state = {}

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (event) {
    event.preventDefault();
    PostInvention(this);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <Heading />
        <Title ref={ (input) => { this.title = input }}/>
        <Description ref={ (input) => { this.description = input }}/>
        <Username ref={ (input) => { this.username = input }}/>
        <Email ref={ (input) => { this.email = input }}/>
        <Bits ref={ (input) => { this.bits = input }}/>
        <Materials ref={ (input) => { this.materials = input }}/>
        <Col xs={12} md={8}>
          <InventionButtons
            submitId="create"
            submitText="Create"
            cancelLink="/inventions" />
        </Col>
      </form>
    );
  };
}

InventionCreate.contextTypes = {
  router: React.PropTypes.object
}

export default InventionCreate;
