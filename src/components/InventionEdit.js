import React, { Component } from 'react';
import Request from 'superagent';

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

const postInvention = (inventionCreate) => {
  Request
    .put(`http://localhost:3000/inventions/${this.props.match.params.id}`)
    .send({
      title: inventionCreate.title.title.props.value,
      description: inventionCreate.description.description.props.value,
      bits: inventionCreate.bits.bits.bits.props.value.split(","),
      username: inventionCreate.username.username.props.value,
      email: inventionCreate.email.email.props.value,
      materials: inventionCreate.materials.materials.materials.props.value.split(",")
    })
    .type('json')
    .accept('json')
    .end(function(err, res){
     if (err || !res.ok) {
       alert('Oh no! error');
     } else {
       alert('yay got ' + JSON.stringify(res.body));
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
    postInvention(this);
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

export default InventionEdit;
