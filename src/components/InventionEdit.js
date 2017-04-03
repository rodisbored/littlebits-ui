import React, { Component } from 'react';
import Request from 'superagent';

import _ from 'lodash';

import Col from 'react-bootstrap/lib/Col';

import 'react-select/dist/react-select.css';

import InventionButtons from './InventionButtons'

import Heading from './invention-form/Heading';
import Title from './invention-form/Title';
import Description from './invention-form/Description';
import Username from './invention-form/Username';
import Email from './invention-form/Email';
import Bits from './invention-form/Bits';
import Materials from './invention-form/Materials';

import FormatOptions from './FormatOptions';

const UpdateInvention = (inventionUpdate) => {
  var materials, bits;
  if (Object.prototype.toString.call(inventionUpdate.materials.materials.materials.props.value) === '[object Array]') {
    materials = _.map(inventionUpdate.materials.materials.materials.props.value, (value) => {
      return value.value
    })
  }
  else {
    materials = inventionUpdate.materials.materials.materials.props.value && inventionUpdate.materials.materials.materials.props.value.split(",")
  }

  if (Object.prototype.toString.call(inventionUpdate.bits.bits.bits.props.value) === '[object Array]') {
    bits = _.map(inventionUpdate.bits.bits.bits.props.value, (value) => {
      return value.value
    })
  }
  else {
    bits = inventionUpdate.bits.bits.bits.props.value && inventionUpdate.bits.bits.bits.props.value.split(",")
  }

  Request
    .put(`http://localhost:3000/inventions/${inventionUpdate.props.match.params.id}`)
    .send({
      title: inventionUpdate.title.title.props.value,
      description: inventionUpdate.description.description.props.value,
      bits: bits,
      username: inventionUpdate.username.username.props.value,
      email: inventionUpdate.email.email.props.value,
      materials: materials
    })
    .type('json')
    .accept('json')
    .end(function(err, res){
     if (err || !res.ok) {
       alert('This is super super ugly but: ' + JSON.stringify(res.body));
     } else {
       alert('Invention updated successfully');
       inventionUpdate.context.router.history.push(`/inventions/${inventionUpdate.props.match.params.id}`);
     }
   });
}

class InventionEdit extends Component {
  constructor() {
    super();
    this.state = {}

    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillMount() {
    var url = `http://localhost:3000/inventions/${this.props.match.params.id}`;
    Request.get(url).then((response) => {
      this.setState({
        invention: response.body
      })
    });
  }

  submitHandler (event) {
    event.preventDefault();
    UpdateInvention(this);
  }

  render() {
    const invention = this.state.invention;

    return (
      <form onSubmit={this.submitHandler}>
        <Heading title={invention && invention.title} />
        <Title ref={ (input) => { this.title = input }} value={invention && invention.title} />
        <Description ref={ (input) => { this.description = input }} value={invention && invention.description} />
        <Username ref={ (input) => { this.username = input }} value={invention && invention.username} />
        <Email ref={ (input) => { this.email = input }} value={invention && invention.email} />
        <Bits ref={ (input) => { this.bits = input }} values={invention && FormatOptions(invention.bits)}/>
        <Materials ref={ (input) => { this.materials = input }} values={invention && FormatOptions(invention.materials)}/>
        <Col xs={12} md={8}>
          <InventionButtons
            submitId="submit"
            submitText="Submit"
            cancelLink={`/inventions/${this.props.match.params.id}`}
          />
        </Col>
      </form>
    );
  };
}

InventionEdit.contextTypes = {
  router: React.PropTypes.object
}

export default InventionEdit;
